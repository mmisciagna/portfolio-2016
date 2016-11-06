// Nav template
module.exports = ($window) => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/nav/nav.html',
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
};
