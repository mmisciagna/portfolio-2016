const mobileMastheadComponent = require('./mobile-masthead-component');


/** @const {!angular.Module} */
module.exports = angular.module('mobile.masthead', [])
    .directive('mobileMasthead', mobileMastheadComponent);
