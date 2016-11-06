module.exports = class navController {
  constructor(NavService, $rootScope) {
    // Nav items
    this.items = NavService.getNavItems();

    // Whether the mobile nav is revealed
    this.mobileNavRevealed = false;

    // The rootScope
    this.rootScope_ = $rootScope;
  }

  // Sets active nav
  isActive(route) {
    return window.location.hash == route;
  }

  // Toogles overlay state
  toggleMobileNav() {
    this.mobileNavRevealed = !this.mobileNavRevealed;
    this.rootScope_.disableScroll = this.mobileNavRevealed;
  }

  // Hides overlay and nav drawer on mobile devices
  resetMobileNav() {
    this.rootScope_.disableScroll = false;
    this.mobileNavRevealed = false;
  }
};
