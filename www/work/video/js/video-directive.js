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
video.directive('video', function() {
  return {
    restrict: 'C',
    controller: 'VideoCtrl as video',
    link: function(scope, element) {
      var button = element.find('button');
      button.bind('click', function() {
        scope.video.isPlaying = true;
        scope.$apply();
      });
    }
  };
});