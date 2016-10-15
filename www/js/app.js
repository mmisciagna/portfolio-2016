/**
 * The main module for the Photo Space app.
 */
var app = angular.module('MyPortfolio', [
  'ngMaterial',
  'ngMdIcons',
  'ngRoute'
]);


/**
 * Configures MyPortfolio module.
 */
app.config(function($mdThemingProvider, $routeProvider) {
  // Angular Material theme provider.
  $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {'default': '700'})
      .accentPalette('yellow', {'default': 'A200'});

  // Angular router provider.
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
