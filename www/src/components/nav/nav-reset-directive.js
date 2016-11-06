// Reset nav
module.exports = () => {
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
};