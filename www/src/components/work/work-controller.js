/** @final @struct */
module.exports = class WorkController {
  /**
   * @param {!VideoService} VideoService
   * @param {!angular.Scope} $rootScope
   * @ngInject
   */
  constructor(VideoService, $rootScope) {
    /**
     * Video items.
     *
     * @export @const {!Array<!videoItem>}
     */
    this.videos = VideoService.getVideos();


    /**
     * Whether a video is playing.
     *
     * @export {boolean>}
     */
    this.videoIsPlaying = false;


    /** @private @const */
    this.rootScope_ = $rootScope;


    /**
     * YouTube player.
     *
     * @private {?YT.Player}
     */
    this.player_ = null;
  }


  /**
   * Creates the YT video player.
   *
   * @param {string} videoId
   * @private
   */
  createVideoPlayer_(videoId) {
    this.player_ = new YT.Player('video-modal__player', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        rel: 0
      },
      events: {
        'onReady': this.onPlayerReady_
      }
    });
  }


  /**
   * Plays the video when the video player is ready.
   *
   * @param {!Event} e
   * @private
   */
  onPlayerReady_(e) {
    e.target.playVideo();
  }


  /**
   * Toggles video modal.
   *
   * @private
   */
  toggleVideo_() {
    this.videoIsPlaying = !this.videoIsPlaying;
    this.rootScope_.disableScroll = this.videoIsPlaying;
  }


  /**
   * Handles the video player when a thumbnail is clicked.
   *
   * @param {sting} videoId
   * @export
   */
  handleVideo(videoId) {
    if (videoId) {
      // Creates video player
      if (!this.player_) {
        this.createVideoPlayer_(videoId);
      } else {
        // Cues the next video
        if (this.player_.getVideoData().video_id != videoId) {
          this.player_.cueVideoById(videoId);
        }
        this.player_.playVideo();
      }
    } else if (this.player_) {
      this.player_.pauseVideo();
    }

    this.toggleVideo_();
  }
};
