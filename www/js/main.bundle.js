(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Main app controller.
 *
 * @final @struct
 */
module.exports = class MainCtrl {
  constructor() {
    /**
     * @export {boolean}
     */
    this.isTouchDevice = 'ontouchstart' in document.documentElement;

    this.loadYouTubeIframeApi_();
  }

  /** @private */
  loadYouTubeIframeApi_() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

},{}],2:[function(require,module,exports){
const mainAppController = require('./main-controller');
const routing = require('./routing');


/** @const {!angular.Module} */
const main = angular.module('portfolio', [
  'ngMdIcons',
  'ngRoute',
  'ngAnimate',
  require('./nav/nav').name,
  require('./mobile-masthead/mobile-masthead').name,
  require('./page-header/page-header').name,
  require('./work/work').name
]);

main.config(routing)
    .controller('MainCtrl', mainAppController);

},{"./main-controller":1,"./mobile-masthead/mobile-masthead":4,"./nav/nav":10,"./page-header/page-header":12,"./routing":13,"./work/work":21}],3:[function(require,module,exports){
/**
 * Mobile masthead component.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/mobile-masthead/mobile-masthead.html',
    controller: 'NavCtrl as nav'
  };
};

},{}],4:[function(require,module,exports){
const mobileMastheadComponent = require('./mobile-masthead-component');


/** @const {!angular.Module} */
module.exports = angular.module('mobile.masthead', [])
    .directive('mobileMasthead', mobileMastheadComponent);

},{"./mobile-masthead-component":3}],5:[function(require,module,exports){
/** @final @struct */
module.exports = class NavController {
  /**
   * @param {!NavService} NavService
   * @param {!angular.Scope} $rootScope
   * @ngInject
   */
  constructor(NavService, $rootScope) {
    /**
     * Nav items.
     *
     * @export @const {!Array<!navItem>}
     */
    this.items = NavService.getNavItems();


    /** @export {boolean} */
    this.mobileNavRevealed = false;


    /** @private @const */
    this.rootScope_ = $rootScope;
  }


  /**
   * Checks whether the url hash matches the given string.
   *
   * @param {string} route The string to test against the url hash.
   * @return {boolean} 
   * @export
   */
  isActive(route) {
    return window.location.hash == route;
  }


  /** @export */
  toggleMobileNav() {
    this.mobileNavRevealed = !this.mobileNavRevealed;
    this.rootScope_.disableScroll = this.mobileNavRevealed;
  }


  /** @export */
  resetMobileNav() {
    this.rootScope_.disableScroll = false;
    this.mobileNavRevealed = false;
  }
};

},{}],6:[function(require,module,exports){
/**
 * Resets the mobile nav on click.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    link: (scope, element) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.nav.resetMobileNav();
        scope.$apply();
      });
    }
  };
};
},{}],7:[function(require,module,exports){
/**
 * @typedef {{
 *   label: string,
 *   route: string
 * }}
 */
let navItem;



/**
 * Service for setting and getting the nav items
 */
module.exports = class NavService {
  constructor() {
    /**
     * @private @const {!Array<!navItem>}
     */
    this.navItems_ = [
      {
        label: 'Intro',
        route: '#/intro'
      },
      {
        label: 'Work',
        route: '#/work'
      },
      {
        label: 'Résumé',
        route: '#/resume'
      },
      {
        label: 'Contact',
        route: 'https://teams.googleplex.com/u/mmisciagna'
      }
    ];
  }


  /**
   * @return {!Array<!navItem>}
   * @export
   */
  getNavItems() {
    return this.navItems_;
  }
};

},{}],8:[function(require,module,exports){
/**
 * Toggles the mobile nav on click.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    link: (scope, element) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.nav.toggleMobileNav();
        scope.$apply();
      });
    }
  };
};

},{}],9:[function(require,module,exports){
/**
 * Hides the mobile nav if it is opened and the window is resized to be larger
 * than the given breakpoint.
 *
 * @param {!angular.$window} $window
 * @return {!angular.Directive}
 * @ngInject
 */
module.exports = ($window) => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/nav/nav.html',
    controller: 'NavCtrl as nav',
    link: (scope) => {
      $window.addEventListener('resize', () => {
        if ($window.innerWidth > 768 && scope.nav.mobileNavRevealed) {
          scope.nav.mobileNavRevealed = false;
          scope.$apply();
        }
      });
    }
  };
};

},{}],10:[function(require,module,exports){
const navController = require('./nav-controller');
const navResetDirective = require('./nav-reset-directive');
const navService = require('./nav-service');
const navToggleDirective = require('./nav-toggle-directive');
const navWindowResizeDirective = require('./nav-window-resize-directive');


/** @const {!angular.Module} */
module.exports = angular.module('nav', [])
    .service('NavService', navService)
    .controller('NavCtrl', navController)
    .directive('nav', navWindowResizeDirective)
    .directive('toggleNav', navToggleDirective)
    .directive('resetNav', navResetDirective);

},{"./nav-controller":5,"./nav-reset-directive":6,"./nav-service":7,"./nav-toggle-directive":8,"./nav-window-resize-directive":9}],11:[function(require,module,exports){
/**
 * Page header component.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      pageTitle: '@'
    },
    templateUrl: '/src/components/page-header/page-header.html'
  };
};

},{}],12:[function(require,module,exports){
const pageHeaderComponent = require('./page-header-component');


/** @const {!angular.Module} */
module.exports = angular.module('pageHeader', [])
    .directive('pageTitle', pageHeaderComponent);
},{"./page-header-component":11}],13:[function(require,module,exports){
/**
 * Configures router states.
 *
 * @param {!angular.$routeProvider} $routeProvider
 * @ngInject
 */
module.exports = ($routeProvider) => {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    controller: 'NavCtrl as nav',
    templateUrl: '/src/components/intro/intro.html'
  }).when('/work', {
    controller: 'WorkCtrl as work',
    templateUrl: '/src/components/work/work.html'
  }).when('/resume', {
    templateUrl: '/src/components/resume/resume.html'
  }).otherwise({
    redirectTo: '/intro'
  });
};

},{}],14:[function(require,module,exports){
/**
 * Video component.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/work/video/video.html'
  };
};

},{}],15:[function(require,module,exports){
/** @final @struct */
module.exports = class VideoController {
  constructor() {
    /** @export {boolean} */
    this.videoInfoIsRevealed = false;
  }

  /** @export */
  toggleVideoInfo() {
    this.videoInfoIsRevealed = !this.videoInfoIsRevealed;
  }
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
/**
 * Toggles video info.
 *
 * @return {!angular.Directive}
 */
module.exports = () => {
  return {
    restrict: 'A',
    controller: 'VideoCtrl as video',
    link: (scope, element, attr) => {
      var button = element[0];
      button.addEventListener('click', () => {
        scope.video.toggleVideoInfo();
        scope.$apply();
      });
    }
  };
};

},{}],19:[function(require,module,exports){
const toggleVideo = require('./video-toggle-directive');
const toggleVideoInfo = require('./video-toggle-info-directive');
const videoController = require('./video-controller');
const videoService = require('./video-service');
const videoComponent = require('./video-component');


/** @const {!angular.Module} */
module.exports = angular.module('video', [])
    .service('VideoService', videoService)
    .controller('VideoCtrl', videoController)
    .directive('videoContainer', videoComponent)
    .directive('toggleVideo', toggleVideo)
    .directive('toggleVideoInfo', toggleVideoInfo);

},{"./video-component":14,"./video-controller":15,"./video-service":16,"./video-toggle-directive":17,"./video-toggle-info-directive":18}],20:[function(require,module,exports){
/** @final @struct */
module.exports = class WorkController {
  /**
   * @param {!VideoService} VideoService
   * @param {!angular.Scope} $rootScope
   * @ngInject
   */
  constructor(VideoService, $rootScope) {
    /**
     * Video items.
     *
     * @export @const {!Array<!videoItem>}
     */
    this.videos = VideoService.getVideos();


    /**
     * Whether a video is playing.
     *
     * @export {boolean>}
     */
    this.videoIsPlaying = false;


    /** @private @const */
    this.rootScope_ = $rootScope;


    /**
     * YouTube player.
     *
     * @private {?YT.Player}
     */
    this.player_ = null;
  }


  /**
   * Creates the YT video player.
   *
   * @param {string} videoId
   * @private
   */
  createVideoPlayer_(videoId) {
    this.player_ = new YT.Player('video-modal__player', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        rel: 0
      },
      events: {
        'onReady': this.onPlayerReady_
      }
    });
  }


  /**
   * Plays the video when the video player is ready.
   *
   * @param {!Event} e
   * @private
   */
  onPlayerReady_(e) {
    e.target.playVideo();
  }


  /**
   * Toggles video modal.
   *
   * @private
   */
  toggleVideo_() {
    this.videoIsPlaying = !this.videoIsPlaying;
    this.rootScope_.disableScroll = this.videoIsPlaying;
  }


  /**
   * Handles the video player when a thumbnail is clicked.
   *
   * @param {sting} videoId
   * @export
   */
  handleVideo(videoId) {
    if (videoId) {
      // Creates video player
      if (!this.player_) {
        this.createVideoPlayer_(videoId);
      } else {
        // Cues the next video
        if (this.player_.getVideoData().video_id != videoId) {
          this.player_.cueVideoById(videoId);
        }
        this.player_.playVideo();
      }
    } else if (this.player_) {
      this.player_.pauseVideo();
    }

    this.toggleVideo_();
  }
};

},{}],21:[function(require,module,exports){
const workController = require('./work-controller');


/** @const {!angular.Module} */
module.exports = angular.module('work', [
  require('./video/video').name
])
    .controller('WorkCtrl', workController);

},{"./video/video":19,"./work-controller":20}]},{},[2]);
