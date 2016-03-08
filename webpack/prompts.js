var defaults = require('../defaults');

module.exports = [{
      name: 'appName',
      message: 'Your app name?',
      default: 'todos'
    },{
      name: 'srcPath',
      message: 'Your src path?',
      default: 'src'
    }, {
      name: 'targetPath',
      message: 'Your target (build) path?',
      default: 'build'
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];
