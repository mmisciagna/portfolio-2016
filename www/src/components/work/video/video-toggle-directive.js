// Toggles video modal
module.exports = () => {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.work.handleVideo(attr.videoId);
        scope.$apply();
      });
    }
  };
};
