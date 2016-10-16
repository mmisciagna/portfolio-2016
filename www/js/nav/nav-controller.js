var navCtrl = angular.module('nav.ctrl', [
  'nav.model'
]);


navCtrl.controller('NavCtrl', function(NavModel) {
  // Nav items
  this.items = NavModel.getNavItems();

  // Sets the active nav.
  this.active = function(route) {
    return window.location.hash == route;
  };

  // Whether the mobile nav menu is expanded.
  this.expanded = false;
});
