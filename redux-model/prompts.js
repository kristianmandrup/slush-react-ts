module.exports = [{
        name: 'modelName',
        message: 'Name your model?',
        default: 'todo'
    }, {
        name: 'platforms',
        type: 'checkbox',
        message: 'For which platforms?',
        choices: ['web', 'native'],
        default: []
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];