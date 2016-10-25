var work = angular.module('work.ctrl', [
  'video.model'
]);



// Work controller constructor
work.Ctrl = function(VideoModel, $rootScope) {
  // Work video items
  this.videos = VideoModel.getVideos();

  // Whether a vide is playing
  this.videoIsPlaying = false;

  // The rootScope
  this.rootScope_ = $rootScope;

  // The video player
  this.player_ = null;
};


// Creates a YT video player
work.Ctrl.prototype.createVideoPlayer_ = function(videoId) {
  this.player_ = new YT.Player('video-modal__player', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    rel: 0,
    events: {
      'onReady': this.onPlayerReady_
    }
  });
};


// Closes modal when video ends
work.Ctrl.prototype.onPlayerReady_ = function(e) {
  e.target.playVideo();
};


// Toggles video modal
work.Ctrl.prototype.toggleVideo = function(videoId) {
  if (videoId) {
    // Creates video player
    if (!this.player_) {
      this.createVideoPlayer_(videoId);
    } else {
      // Cues video
      if (this.player_.getVideoData().video_id != videoId) {
        this.player_.cueVideoById(videoId);
      }
      this.player_.playVideo();
    }
  } else if (this.player) {
    // Pauses video
    this.player_.pauseVideo();
  }

  // Toggles modal
  this.videoIsPlaying = !this.videoIsPlaying;
  this.rootScope_.disableScroll = this.videoIsPlaying;
};

work.controller('WorkCtrl', work.Ctrl);