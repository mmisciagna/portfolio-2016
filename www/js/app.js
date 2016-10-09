/**
 * The main module for the Photo Space app.
 */
var app = angular.module('MyPortfolio', [
  'ngMaterial',
  'ngMdIcons',
]);


/**
 * Angular Material colors.
 */
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('light-blue');
});
