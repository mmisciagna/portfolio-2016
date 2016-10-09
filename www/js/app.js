/**
 * The main module for the Photo Space app.
 */
var app = angular.module('MyPortfolio', [
  'ngMaterial',
  'ngMdIcons',
  'ngRoute'
]);


/**
 * Sets the Material theme and router.
 */
app.config(function($mdThemingProvider, $routeProvider) {
  // Configures Angular Material theme.
  $mdThemingProvider.theme('default')
      .primaryPalette('green', {'default': 'A100'})
      .accentPalette('brown', {'default': '500'});

  // Configures the router.
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
