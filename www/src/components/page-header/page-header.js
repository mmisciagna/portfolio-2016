const pageHeaderComponent = require('./page-header-component');


/** @const {!angular.Module} */
module.exports = angular.module('pageHeader', [])
    .directive('pageTitle', pageHeaderComponent);