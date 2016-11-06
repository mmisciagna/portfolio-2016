/**
 * Toggles the video modal.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    link: (scope, element, attr) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.work.handleVideo(attr.videoId);
        scope.$apply();
      });
    }
  };
};
