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
    templateUrl: '/intro/intro.html'
  }).when('/work', {
    controller: 'WorkCtrl as work',
    templateUrl: '/work/work.html'
  }).when('/resume', {
    templateUrl: '/resume/resume.html'
  }).otherwise({
    redirectTo: '/intro'
  });
});



// Main app controller constructor
portfolio.Ctrl = function() {
  this.isTouchDevice = 'ontouchstart' in document.documentElement;
};

portfolio.controller('MainCtrl', portfolio.Ctrl);
