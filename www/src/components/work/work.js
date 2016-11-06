const workController = require('./work-controller');


module.exports = angular.module('work', [
  require('./video/video').name
])
    .controller('WorkCtrl', workController);
