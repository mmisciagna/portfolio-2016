/**
 * @typedef {{
 *   title: string,
 *   id: string,
 *   role: string,
 *   goal: string,
 *   link: string,
 *   challenges: !Array<string>
 * }}
 */
let videoItem;



/**  @final @struct */
module.exports = class VideoService {
  /**
   * @param {!angular.$http} $http
   * @ngInject
   */
  constructor($http) {
    /** @private @const {!Array<!videoItem>} */
    this.videos_ = [];


    /** @private @const */
    this.http_ = $http;


    /** @private @const */
    this.gSheetUrl_ =
        'https://spreadsheets.google.com/feeds/list/' +
        '1rDkX0Al0yGs84PrG5kxkeo0ndGqXgwwBAP-uYoUI_Hw/' +
        'od6/public/values?alt=json&callback=JSON_CALLBACK';

    this.getData_();
  }


  /**
   * Gets video data from gSheet and parses it on success.
   *
   * @private
   *
   * TODO: Handle errors.
   */
  getData_() {
    this.http_.jsonp(this.gSheetUrl_)
        .success((response) => {
          this.parseData_(response.feed.entry);
        });
  }


  /**
   * Parses video data from gSheet.
   *
   * @param {!Array<!videoItem>} videoData
   */
  parseData_(videoData) {
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

      this.videos_.push(videoObj);
    }, this);
  }


  /**
   * Returns the videos.
   *
   * @return {!Array<!videoItem>}
   * @export
   */
  getVideos() {
    return this.videos_;
  }
};
