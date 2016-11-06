module.exports = () => {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pageTitle: '@'
    },
    templateUrl: '/src/components/page-header/page-header.html'
  };
};
