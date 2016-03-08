var gulp = require('gulp'),
    _ = require('underscore.string'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    chalk = require('chalk-log'),
    inquirer = require('inquirer');

require('sugar');

// calculate file basename based on conventions
function fileBaseName(rest, answers) {
    // __s is plural
    if (rest.match('^_s')) {
        return answers.modelPluralName + (rest.slice(2) || '');
    }
    // if next letter is uppercase, use class name
    if (rest[0].toUpperCase() == rest[0]) {
        return answers.modelClassName + rest;
    }
    // by default simply use model name
    return answers.modelName;
}

function doTemplates(answers, dir, done) {
    dir = dir || 'src';
    gulp.src(__dirname + '/templates/' + dir + '/**')
    .pipe(template(answers))
    .pipe(rename(function (file) {
        if (file.basename == '__spec__')
            return answers.specFolderName;

        if (file.basename[0] === '_') {
            var rest = file.basename.slice(1);
            file.basename = fileBaseName(rest, answers);
        }
    }))
    .pipe(conflict('./' + dir))
    .pipe(gulp.dest('./' + dir))
    .pipe(install())
    .on('end', function () {
        done();
    });
}

module.exports = function (done) {
    var prompts = require('./prompts');

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            var platforms = answers.platforms;
            answers.native = platforms.indexOf('native') >= 0;
            answers.web = platforms.indexOf('web') >= 0;

            answers.modelConstName = answers.modelName.toUpperCase();
            answers.modelClassName = answers.modelName.capitalize();
            answers.modelPluralName = answers.modelName.pluralize();


            gulp.task('native', function() {
                if (answers.native)
                    doTemplates(answers, 'native', done);
            });

            gulp.task('web', function() {
                if (answers.web)
                    doTemplates(answers, 'web', done);
            });

            gulp.task('domain-model', ['web', 'native'], function() {
                doTemplates(answers, 'src', done);
            });

            runSequence('domain-model');
        });
};