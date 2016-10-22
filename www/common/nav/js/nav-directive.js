var nav = angular.module('nav.directive', [
  'nav.ctrl'
]);


nav.directive('nav', function($window) {
  return {
    restrict: 'C',
    templateUrl: '/common/nav/nav.html',
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
