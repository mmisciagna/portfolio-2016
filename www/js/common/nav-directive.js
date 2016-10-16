var navDir = angular.module('nav.directive', [
  'nav.ctrl'
]);

navDir.directive('navigation', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '../tpls/nav.html',
    controller: 'NavCtrl'
  };
});
