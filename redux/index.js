var _ = require('underscore.string'),
    inquirer = require('inquirer'),
    runSequence = require('run-sequence');

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

module.exports = function (done) {
    var prompts = require('./prompts');

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            doTemplates(answers, done);
        });
};