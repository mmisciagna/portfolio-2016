module.exports = class VideoController {
  constructor(VideoService) {
    // Whether the video info is revealed
    this.videoInfoIsRevealed = false;
  }

  // Toggles video info
  toggleVideoInfo() {
    this.videoInfoIsRevealed = !this.videoInfoIsRevealed;
  }
};
