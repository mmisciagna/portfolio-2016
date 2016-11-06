(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Main app controller.
 * @final @struct
 */
module.exports = class MainCtrl {
  constructor() {
    /** @type {boolean} */
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
  require('./mobile-masthead/mobile-masthead').name,
  require('./nav/nav').name,
  require('./page-header/page-header').name,
  require('./work/work').name
]);

main.config(routing)
    .controller('MainCtrl', mainAppController);

},{"./main-controller":1,"./mobile-masthead/mobile-masthead":4,"./nav/nav":10,"./page-header/page-header":12,"./routing":13,"./work/work":21}],3:[function(require,module,exports){
/**
 * Mobile masthead component.
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
module.exports = class navController {
  constructor(NavService, $rootScope) {
    // Nav items
    this.items = NavService.getNavItems();

    // Whether the mobile nav is revealed
    this.mobileNavRevealed = false;

    // The rootScope
    this.rootScope_ = $rootScope;
  }

  // Sets active nav
  isActive(route) {
    return window.location.hash == route;
  }

  // Toogles overlay state
  toggleMobileNav() {
    this.mobileNavRevealed = !this.mobileNavRevealed;
    this.rootScope_.disableScroll = this.mobileNavRevealed;
  }

  // Hides overlay and nav drawer on mobile devices
  resetMobileNav() {
    this.rootScope_.disableScroll = false;
    this.mobileNavRevealed = false;
  }
};

},{}],6:[function(require,module,exports){
// Reset nav
module.exports = () => {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.nav.resetMobileNav();
        scope.$apply();
      });
    }
  };
};
},{}],7:[function(require,module,exports){
module.exports = class navService {
  constructor() {
    this.navItems = [
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

  // Returns the nav items
  getNavItems() {
    return this.navItems;
  }
};

},{}],8:[function(require,module,exports){
// Toggle nav
module.exports = () => {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var button = element[0];
      button.addEventListener('click', function() {
        scope.nav.toggleMobileNav();
        scope.$apply();
      });
    }
  };
};
},{}],9:[function(require,module,exports){
// Nav template
module.exports = ($window) => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/nav/nav.html',
    controller: 'NavCtrl as nav',
    link: function(scope) {
      $window.addEventListener('resize', function() {
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

module.exports = angular.module('pageHeader', [])
    .directive('pageTitle', pageHeaderComponent);
},{"./page-header-component":11}],13:[function(require,module,exports){
/**
 * Configures html5Mode and router states.
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
}

},{}],14:[function(require,module,exports){
module.exports = () => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/work/video/video.html'
  };
};

},{}],15:[function(require,module,exports){
module.exports = class VideoController {
  constructor(VideoService) {
    // Whether the video info is revealed
    this.videoInfoIsRevealed = false;
  }

  // Toggles video info
  toggleVideoInfo() {
    this.videoInfoIsRevealed = !this.videoInfoIsRevealed;
  }
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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
module.exports = class WorkController {
  constructor(VideoService, $rootScope) {
    // Work video items
    this.videos = VideoService.getVideos();

    // Whether a video is playing
    this.videoIsPlaying = false;

    // The rootScope
    this.rootScope_ = $rootScope;

    // The video player
    this.player_ = null;
  }

  // Creates a YT video player
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

  // Plays video 
  onPlayerReady_(e) {
    e.target.playVideo();
  }

  // Toggles video modal
  toggleVideo_() {
    this.videoIsPlaying = !this.videoIsPlaying;
    this.rootScope_.disableScroll = this.videoIsPlaying;
  }

  // Handles the video when a thumbnail is clicked
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


module.exports = angular.module('work', [
  require('./video/video').name
])
    .controller('WorkCtrl', workController);

},{"./video/video":19,"./work-controller":20}]},{},[2]);
