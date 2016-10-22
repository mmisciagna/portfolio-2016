var mobileMasthead = angular.module('mobile.masthead', [
  'nav.ctrl'
]);


mobileMasthead.directive('mobileMasthead', function() {
  return {
    restrict: 'C',
    replace: true,
    templateUrl: '/common/mobile-masthead/mobile-masthead.html',
    controller: 'NavCtrl as nav'
  };
});