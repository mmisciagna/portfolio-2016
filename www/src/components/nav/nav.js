const navController = require('./nav-controller');
const navResetDirective = require('./nav-reset-directive');
const navService = require('./nav-service');
const navToggleDirective = require('./nav-toggle-directive');
const navWindowResizeDirective = require('./nav-window-resize-directive');


/** @const {!angular.Module} */
module.exports = angular.module('nav', [])
    .service('NavService', navService)
    .controller('NavCtrl', navController)
    .directive('nav', navWindowResizeDirective)
    .directive('toggleNav', navToggleDirective)
    .directive('resetNav', navResetDirective);
