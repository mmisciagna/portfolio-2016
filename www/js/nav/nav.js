var navCtrl = angular.module('nav.ctrl', [
  'nav.model'
]);


navCtrl.controller('NavCtrl', function(NavModel) {
  this.items = NavModel.getNavItems();

  this.active = function(route) {
    return window.location.hash == route;
  };
});
