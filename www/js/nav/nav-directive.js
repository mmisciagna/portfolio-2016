var navDir = angular.module('nav.directive', [
  'nav.ctrl'
]);


// Defines nav template on element.
navDir.directive('navigation', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '../tpls/nav.html',
    controller: 'NavCtrl'
  };
});


// Removes expanded class from nav menu on large screens
navDir.directive('navMenu', function($window) {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element) {
      $window.addEventListener('resize', function() {
        var navMenu = element[0];

        if ($window.innerWidth >= 768 &&
            navMenu.classList.contains('nav__menu--expanded')) {
          navMenu.classList.remove('nav__menu--expanded')
        }
      });
    }
  };
});
