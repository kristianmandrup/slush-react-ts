var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    chalk = require('chalk-log'),
    shell = require('gulp-shell');


function hasDir(directory) {
  try {
    console.log('has dir', directory, fs.statSync(directory));
    return fs.statSync(directory);
  } catch(e) {
    return false;
  }
}

function isNative() {
    return hasDir('ios') || hasDir('android');
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

    gulp.task('prepare-project', shell.task(prepareTasks(answers.appNameSlug)));

    gulp.task('ts-react-templates', ['prepare-project'], function() {
        doTemplates(answers);
    });
}
