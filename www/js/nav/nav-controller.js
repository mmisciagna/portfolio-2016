var nav = angular.module('nav.ctrl', [
  'nav.model'
]);

// Nav controller constructor
nav.Ctrl = function(NavModel, $rootScope) {
  // Nav items
  this.items = NavModel.getNavItems();

  // Whether the mobile nav drawer is revealed
  this.revealed = false;
};

// Sets active nav
nav.Ctrl.prototype.active = function(route) {
  return window.location.hash == route;
};

nav.controller('NavCtrl', nav.Ctrl);
