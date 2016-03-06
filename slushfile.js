/*
 * slush-react-native-ts-generator
 * https://github.com/kristianmandrup/slush-react-native-ts-generator
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var chalk = require('chalk-log');


let tasks = {};
tasks.default = require('./default');
gulp.task('default', tasks.default);

// TODO: read from package.json!!!
var packInfo = require('./package.json');

chalk.note('React Native Typescript generator: v.' + packInfo.version);

for (let name of ['redux', 'web'. 'webpack']) {
  tasks[name] = require('./' + name)();
  gulp.task(name, tasks[name]);
}
