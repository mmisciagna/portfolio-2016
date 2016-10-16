var nav = angular.module('nav', [
  'nav.model'
]);


nav.controller('NavCtrl', function(NavModel) {
  this.items = NavModel.getNavItems();

  this.active = function(route) {
    return window.location.hash == route;
  };
});
