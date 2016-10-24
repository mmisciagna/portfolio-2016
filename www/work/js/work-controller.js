var work = angular.module('work.ctrl', [
  'ngSanitize',
  'video.model'
]);



// Work controller constructor
work.Ctrl = function(VideoModel, $sce, $rootScope) {
  // Work video items
  this.videos = VideoModel.getVideos();

  // Whether a vide is playing
  this.videoIsPlaying = false;

  // HTML sanitize provider
  this.sanitize = $sce;

  // The rootScope
  this.rootScope_ = $rootScope;

  // Video iframe
  this.videoIframe = document.querySelector('.video-modal__iframe');
};


// Returns trusted HTML
work.Ctrl.prototype.getEmebedHtml = function(html) {
  return this.sanitize.trustAsHtml(html);
};


// Toggles video modal
work.Ctrl.prototype.toggleVideo = function(videoId) {
  if (videoId) {
    this.videoIframe.src =
        '//www.youtube.com/embed/' + videoId + '?autoplay=1&modestbranding=1' +
        '&rel=0&showinfo=0"';
  } else {
    this.videoIframe.src = '';
  }

  this.videoIsPlaying = !this.videoIsPlaying;
  this.rootScope_.disableScroll = this.videoIsPlaying;
};

work.controller('WorkCtrl', work.Ctrl);