/**
 * Toggles video info.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    controller: 'VideoCtrl as video',
    link: (scope, element, attr) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.video.toggleVideoInfo();
        scope.$apply();
      });
    }
  };
};
