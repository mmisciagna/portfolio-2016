var app = angular.module('MyPortfolio', [
  'ngMdIcons',
  'ngRoute',
  'nav.directive'
]);


// Main app config
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



// Main app controller constructor
app.Ctrl = function() {
  this.isTouchDevice = 'ontouchstart' in document.documentElement;
};

app.controller('MainCtrl', app.Ctrl);
