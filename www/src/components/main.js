const mainAppController = require('./main-controller');
const routing = require('./routing');


/** @const {!angular.Module} */
const main = angular.module('portfolio', [
  'ngMdIcons',
  'ngRoute',
  'ngAnimate',
  require('./mobile-masthead/mobile-masthead').name,
  require('./nav/nav').name,
  require('./page-header/page-header').name,
  require('./work/work').name
]);

main.config(routing)
    .controller('MainCtrl', mainAppController);
