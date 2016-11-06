const toggleVideo = require('./video-toggle-directive');
const toggleVideoInfo = require('./video-toggle-info-directive');
const videoController = require('./video-controller');
const videoService = require('./video-service');
const videoComponent = require('./video-component');


/** @const {!angular.Module} */
module.exports = angular.module('video', [])
    .service('VideoService', videoService)
    .controller('VideoCtrl', videoController)
    .directive('videoContainer', videoComponent)
    .directive('toggleVideo', toggleVideo)
    .directive('toggleVideoInfo', toggleVideoInfo);
