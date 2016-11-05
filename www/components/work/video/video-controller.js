var video = angular.module('video.ctrl', []);


// Video controller constructor
video.Ctrl = function(VideoModel, $rootScope) {
  // Whether the video info is revealed
  this.videoInfoIsRevealed = false;
};


// Toggles video info
video.Ctrl.prototype.toggleVideoInfo = function() {
  this.videoInfoIsRevealed = !this.videoInfoIsRevealed;
};

video.controller('VideoCtrl', video.Ctrl);