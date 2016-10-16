var navDir = angular.module('nav.directive', [
  'nav.ctrl'
]);


// Defines nav template on element.
navDir.directive('navigation', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '../tpls/nav.html',
    controller: 'NavCtrl as nav'
  };
});


// Removes expanded class from nav menu on large screens
navDir.directive('navMenu', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $window.addEventListener('resize', function() {
        var navMenu = element[0];

        if ($window.innerWidth >= 768 && scope.nav.expanded) {
          scope.nav.expanded = false;
          scope.$apply();
        }
      });
    }
  };
});
