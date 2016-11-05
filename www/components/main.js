var portfolio = angular.module('portfolio', [
  'ngMdIcons',
  'ngRoute',
  'ngAnimate',
  'mobile.masthead',
  'nav.directive',
  'page.header',
  'video.directive'
]);


// Main app config
portfolio.config(function($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    templateUrl: '/components/intro/intro.html'
  }).when('/work', {
    controller: 'WorkCtrl as work',
    templateUrl: '/components/work/work.html'
  }).when('/resume', {
    templateUrl: '/components/resume/resume.html'
  }).otherwise({
    redirectTo: '/intro'
  });
});



// Main app controller constructor
portfolio.Ctrl = function() {
  // Whether user is on touch device
  this.isTouchDevice = 'ontouchstart' in document.documentElement;

  this.loadIframeApi_();
};


// Load in YT iframe API
portfolio.Ctrl.prototype.loadIframeApi_ = function() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

portfolio.controller('MainCtrl', portfolio.Ctrl);
