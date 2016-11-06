/**
 * Main app controller.
 *
 * @final @struct
 */
module.exports = class MainCtrl {
  constructor() {
    /**
     * @export {boolean}
     */
    this.isTouchDevice = 'ontouchstart' in document.documentElement;

    this.loadYouTubeIframeApi_();
  }

  /** @private */
  loadYouTubeIframeApi_() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}
