/**
 * MyPortfolio module
 */
var app = angular.module('MyPortfolio', [
  // 'ngMdIcons',
  'ngRoute'
]);


/**
 * Configures MyPortfolio module
 */
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    templateUrl: '/tpls/intro.html'
  }).when('/work', {
    templateUrl: '/tpls/work.html'
  }).otherwise({
    redirectTo: '/intro'
  });
});


/**
 * Constructor for MyPortfolio module
 */
app.controller('MainCtrl', function() {
  this.isTouchDevice = 'ontouchstart' in document.documentElement;
});
