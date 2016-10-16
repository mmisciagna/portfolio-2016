var nav = angular.module('nav.ctrl', [
  'nav.model'
]);

// Nav controller constructor
nav.Ctrl = function(NavModel) {
  this.items = NavModel.getNavItems();
};

// Sets active nav
nav.Ctrl.prototype.active = function(route) {
  return window.location.hash == route;
};

nav.controller('NavCtrl', nav.Ctrl);
