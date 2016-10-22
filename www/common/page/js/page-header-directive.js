var pageHeader = angular.module('page.header', []);

pageHeader.directive('pageTitle', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pageTitle: '@'
    },
    templateUrl: '/common/page/page-header.html'
  };
});
