/**
 * Hides the mobile nav if it is opened and the window is resized to be larger
 * than the given breakpoint.
 *
 * @param {!angular.$window} $window
 * @return {!angular.Directive}
 * @ngInject
 */
module.exports = ($window) => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/nav/nav.html',
    controller: 'NavCtrl as nav',
    link: (scope) => {
      $window.addEventListener('resize', () => {
        if ($window.innerWidth > 768 && scope.nav.mobileNavRevealed) {
          scope.nav.mobileNavRevealed = false;
          scope.$apply();
        }
      });
    }
  };
};
