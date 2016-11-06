const workController = require('./work-controller');


/** @const {!angular.Module} */
module.exports = angular.module('work', [
  require('./video/video').name
])
    .controller('WorkCtrl', workController);
