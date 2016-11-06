// Toggles video info
module.exports = () => {
  return {
    restrict: 'A',
    controller: 'VideoCtrl as video',
    link: function(scope, element, attr) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.video.toggleVideoInfo();
        scope.$apply();
      });
    }
  };
};
