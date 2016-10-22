var nav = angular.module('nav.directive', [
  'nav.ctrl'
]);

// Nav template
nav.directive('navigation', function() {
  return {
    restrict: 'A',
    scope: {},
    templateUrl: '/common/nav/nav.html',
    controller: 'NavCtrl as nav'
  };
});

// Removes expanded class from nav menu on large screens
nav.directive('navMenu', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $window.addEventListener('resize', function() {
        if ($window.innerWidth > 768 && scope.nav.mobileNavRevealed) {
          scope.nav.mobileNavRevealed = false;
          scope.$apply();
        }
      });
    }
  };
});
