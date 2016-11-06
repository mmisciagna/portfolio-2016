const pageHeaderComponent = require('./page-header-component');

module.exports = angular.module('pageHeader', [])
    .directive('pageTitle', pageHeaderComponent);