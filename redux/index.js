var gulp = require('gulp'),
    _ = require('underscore.string'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    chalk = require('chalk-log'),
    inquirer = require('inquirer'),
    extend = require('extend'),
    jsonfile = require('jsonfile')
    shell = require('gulp-shell'),
    runSequence = require('run-sequence');

function doTemplates(answers, done) {
    gulp.src(__dirname + '/templates/**')
    .pipe(template(answers))
    .pipe(rename(function (file) {
        if (file.basename == '__spec__')
            return answers.specFolderName;

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


module.exports = function (done) {
    var prompts = require('./prompts');

    function addReduxDeps() {
        try {
            var depsObj = require('./dependencies.json');
            var packageObj = jsonfile.readFileSync('./package.json');
            var newPackage = extend(true, packageObj, depsObj);
            chalk.log('Patching: package.json');
            jsonfile.writeFileSync('./package.json', newPackage, {spaces: 2});
        } catch(e) {
            console.error(e);
        }
    };

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }

            gulp.task('config-app', function() {
                chalk.note('Configure redux');
                addReduxDeps();
                doTemplates(answers, done);
            });

            runSequence('config-app');
        });
};