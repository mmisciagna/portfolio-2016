// Video model constructor
module.exports = class VideoService {
  constructor($http) {
    // Work videos and info
    this.videos = [];

    // Angular's http service
    this.http_ = $http;

    this.gSheet_ =
        'https://spreadsheets.google.com/feeds/list/' +
        '1rDkX0Al0yGs84PrG5kxkeo0ndGqXgwwBAP-uYoUI_Hw/' +
        'od6/public/values?alt=json&callback=JSON_CALLBACK';

    this.getData_();
  }

  // Gets video data from gSheet
  getData_() {
    this.http_.jsonp(this.gSheet_)
        .success((response) => {
          this.parse_(response.feed.entry);
        });
  }

  // Parses gSheet data
  parse_(videoData) {
    videoData.forEach((data) => {
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
  }

  // Returns the videos
  getVideos() {
    return this.videos;
  }
};
