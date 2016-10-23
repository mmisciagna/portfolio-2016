var video = angular.module('video.ctrl', []);


// Video controller constructor
video.Ctrl = function() {
  // Whether the video is playing
  this.isPlaying = false;
};


// Plays video
video.Ctrl.prototype.play = function() {
  this.isPlaying = true;
};

video.controller('VideoCtrl', video.Ctrl);