var mobileMasthead = angular.module('mobile.masthead', [
  'nav.ctrl'
]);


mobileMasthead.directive('mobileMasthead', function() {
  return {
    restrict: 'C',
    templateUrl: '/components/mobile-masthead/mobile-masthead.html',
    controller: 'NavCtrl as nav'
  };
});