var video = angular.module('video.model', []);

var gSheet =
    'https://spreadsheets.google.com/feeds/list/' +
    '1rDkX0Al0yGs84PrG5kxkeo0ndGqXgwwBAP-uYoUI_Hw/' +
    'od6/public/values?alt=json&callback=JSON_CALLBACK';


// Video model constructor
video.Model = function($http) {
  // Work videos and info
  this.videos = [];

  // Angular's http service
  this.http_ = $http;

  this.getData_();
};


// Gets video data from gSheet
video.Model.prototype.getData_ = function() {
  var self = this;

  this.http_.jsonp(gSheet).success(function(response) {
    self.parse_(response.feed.entry);
  });
};


// Parses gSheet data
video.Model.prototype.parse_ = function(videoData) {
  videoData.forEach(function(data) {
    var videoObj = {};
    videoObj.title = data.gsx$title.$t;
    videoObj.id = data.gsx$videoid.$t;
    videoObj.role = data.gsx$role.$t;
    videoObj.goal = data.gsx$goal.$t;
    videoObj.link = data.gsx$link.$t;
    videoObj.challenges = [data.gsx$challenge.$t];

    if (data.gsx$challenge_2.$t.length) {
      videoObj.challenges.push(data.gsx$challenge_2.$t);
    };

    this.videos.push(videoObj);
  }, this);
};


// Returns the videos
video.Model.prototype.getVideos = function() {
  return this.videos;
};

video.service('VideoModel', video.Model);
