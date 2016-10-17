var nav = angular.module('nav.directive', [
  'nav.ctrl'
]);

// Nav template
nav.directive('navigation', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '../tpls/nav.html',
    controller: 'NavCtrl as nav'
  };
});


// Removes expanded class from nav menu on large screens
nav.directive('navMenu', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var navMenu = element[0];
      $window.addEventListener('resize', function() {
        if ($window.innerWidth >= 768 && scope.nav.revealed) {
          scope.nav.revealed = false;
          scope.$apply();
        }
      });
    }
  };
});
