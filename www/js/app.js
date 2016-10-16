var app = angular.module('MyPortfolio', [
  'ngMdIcons',
  'ngRoute',
  'nav.directive'
]);


app.config(function($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    templateUrl: '/tpls/intro.html'
  }).when('/work', {
    templateUrl: '/tpls/work.html'
  }).when('/resume', {
    templateUrl: '/tpls/resume.html'
  }).otherwise({
    redirectTo: '/intro'
  });
});


app.controller('MainCtrl', function() {
  this.isTouchDevice = 'ontouchstart' in document.documentElement;
});
