var nav = angular.module('nav.directive', [
  'nav.ctrl'
]);


// Nav template
nav.directive('nav', function($window) {
  return {
    restrict: 'C',
    templateUrl: '/components/nav/nav.html',
    controller: 'NavCtrl as nav',
    link: function(scope) {
      $window.addEventListener('resize', function() {
        if ($window.innerWidth > 768 && scope.nav.mobileNavRevealed) {
          scope.nav.mobileNavRevealed = false;
          scope.$apply();
        }
      });
    }
  };
});


// Toggle nav
nav.directive('toggleNav', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.nav.toggleMobileNav();
        scope.$apply();
      });
    }
  };
});


// Reset nav
nav.directive('resetNav', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.nav.resetMobileNav();
        scope.$apply();
      });
    }
  };
});
