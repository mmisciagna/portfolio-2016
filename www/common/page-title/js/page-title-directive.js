var pageTitle = angular.module('page.title', []);

pageTitle.directive('pageTitle', function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pageTitle: '@'
    },
    templateUrl: '/common/page-title/page-title.html'
  };
});
