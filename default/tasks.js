var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    chalk = require('chalk-log'),
    shell = require('gulp-shell'),
    extend = require('extend'),
    jsonfile = require('jsonfile');

var fs = require('fs'),
    path = require('path');

function hasDir(directory) {
  try {
    console.log('has dir', directory);
    var stats = fs.statSync(directory);
    return stats;
  } catch(e) {
    console.log('nope', e);
    return false;
  }
}

function isNative() {
    return hasDir('./ios') || hasDir('./android');
}

module.exports = function (answers) {
    function doTemplates(answers, done) {
        gulp.src(__dirname + '/templates/**')
        .pipe(template(answers))
        .pipe(rename(function (file) {
            if (file.basename[0] === '_') {
                file.basename = '.' + file.basename.slice(1);
            }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function () {
            done();
        });
    }

    function prepareTasks(name) {
        var tasks = [];
        if (!isNative()) {
            chalk.error('You must run this generator inside a project created with react-native-cli');
            chalk.note('react-native init ' + name);
            process.exit(1);
        }
        tasks.push('rm index.*.js');
        return tasks;
    }

    gulp.task('merge-package', function() {
        try {
            var depsObj = require('./dependencies.json');
            var packageObj = jsonfile.readFileSync('./package.json');
            var newPackage = extend(true, packageObj, depsObj);
            chalk.log('Patching: package.json');
            jsonfile.writeFileSync('./package.json', newPackage, {spaces: 2});
        } catch(e) {
            console.error(e);
        }
    });

    gulp.task('prepare-project', shell.task(prepareTasks(answers.appNameSlug)));

    gulp.task('ts-react-templates', ['prepare-project', 'merge-package'], function() {
        doTemplates(answers);
    });
}
