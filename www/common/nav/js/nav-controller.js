var nav = angular.module('nav.ctrl', [
  'nav.model'
]);



// Nav controller constructor
nav.Ctrl = function(NavModel, $rootScope) {
  // Nav items
  this.items = NavModel.getNavItems();

  // Whether the mobile nav is revealed
  this.mobileNavRevealed = false;

  // The rootScope
  this.rootScope_ = $rootScope;
};


// Sets active nav
nav.Ctrl.prototype.isActive = function(route) {
  return window.location.hash == route;
};


// Toogles overlay state
nav.Ctrl.prototype.toggleMobileNav = function() {
  this.mobileNavRevealed = !this.mobileNavRevealed;
  this.rootScope_.mobileNavIsVisible = this.mobileNavRevealed;
};


// Hides overlay and nav drawer on mobile devices
nav.Ctrl.prototype.resetMobileNav = function() {
  this.rootScope_.mobileNavIsVisible = false;
  this.mobileNavRevealed = false;
};

nav.controller('NavCtrl', nav.Ctrl);
