/**
 * Toggles the mobile nav on click.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    link: (scope, element) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.nav.toggleMobileNav();
        scope.$apply();
      });
    }
  };
};
