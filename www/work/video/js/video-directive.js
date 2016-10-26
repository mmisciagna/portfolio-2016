var video = angular.module('video.directive', [
  'work.ctrl'
]);


// Video template
video.directive('videoContainer', function() {
  return {
    restrict: 'C',
    templateUrl: '/work/video/video.html'
  };
});


// Toggles video modal
video.directive('toggleVideo', function() {
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
});
