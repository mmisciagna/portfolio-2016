var video = angular.module('video.directive', [
  'work.ctrl',
  'video.ctrl'
]);


// Video template
video.directive('videoContainer', function() {
  return {
    restrict: 'C',
    templateUrl: '/work/video/video.html'
  };
});


// Play video and remove any others
video.directive('playVideo', function() {
  return {
    restrict: 'A',
    controller: 'VideoCtrl as video',
    link: function(scope, element) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.video.play();
        scope.$apply();
      });
    }
  };
});