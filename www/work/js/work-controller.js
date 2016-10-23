var work = angular.module('work.ctrl', [
  'ngSanitize',
  'video.model'
]);


// Work controller constructor
work.Ctrl = function(VideoModel, $sce) {
  // Work video items
  this.videos = VideoModel.getVideos();

  // HTML sanitize provider
  this.sanitize = $sce;
};


// Returns trusted HTML
work.Ctrl.prototype.getEmebedHtml = function(html) {
  return this.sanitize.trustAsHtml(html);
};

work.controller('WorkCtrl', work.Ctrl);