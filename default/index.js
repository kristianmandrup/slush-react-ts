var _ = require('underscore.string'),
    inquirer = require('inquirer'),
    runSequence = require('run-sequence');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}


module.exports = function (done) {
    var prompts = require('./prompts');

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            require('./tasks')(answers);

            runSequence('ts-react-templates');
        });
};