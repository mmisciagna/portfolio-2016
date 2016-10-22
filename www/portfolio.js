var portfolio = angular.module('portfolio', [
  'ngMdIcons',
  'ngRoute',
  'nav.directive',
  'page.header'
]);


// Main app config
portfolio.config(function($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    templateUrl: '/intro/intro.html'
  }).when('/work', {
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
