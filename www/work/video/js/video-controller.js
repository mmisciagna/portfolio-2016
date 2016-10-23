var video = angular.module('video.ctrl', []);


// Video controller constructor
video.Ctrl = function($rootScope) {
  // Whether the video is playing
  this.isPlaying = false;

  $rootScope.noVideoIsPlaying = true;
};

video.controller('VideoCtrl', video.Ctrl);