/** @final @struct */
module.exports = class NavController {
  /**
   * @param {!NavService} NavService
   * @param {!angular.Scope} $rootScope
   * @ngInject
   */
  constructor(NavService, $rootScope) {
    /**
     * Nav items.
     *
     * @export @const {!Array<!navItem>}
     */
    this.items = NavService.getNavItems();


    /** @export {boolean} */
    this.mobileNavRevealed = false;


    /** @private @const */
    this.rootScope_ = $rootScope;
  }


  /**
   * Checks whether the url hash matches the given string.
   *
   * @param {string} route The string to test against the url hash.
   * @return {boolean} 
   * @export
   */
  isActive(route) {
    return window.location.hash == route;
  }


  /** @export */
  toggleMobileNav() {
    this.mobileNavRevealed = !this.mobileNavRevealed;
    this.rootScope_.disableScroll = this.mobileNavRevealed;
  }


  /** @export */
  resetMobileNav() {
    this.rootScope_.disableScroll = false;
    this.mobileNavRevealed = false;
  }
};
