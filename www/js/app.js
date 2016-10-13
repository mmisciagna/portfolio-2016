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
      .primaryPalette('blue-grey', {'default': '700'})
      .accentPalette('yellow', {'default': 'A200'});

  // Configures Angular router.
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
