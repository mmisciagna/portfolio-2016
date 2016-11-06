/** @final @struct */
module.exports = class VideoController {
  constructor() {
    /** @export {boolean} */
    this.videoInfoIsRevealed = false;
  }

  /** @export */
  toggleVideoInfo() {
    this.videoInfoIsRevealed = !this.videoInfoIsRevealed;
  }
};
