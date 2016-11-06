/**
 * Mobile masthead component.
 */
module.exports = () => {
  return {
    restrict: 'C',
    templateUrl: '/src/components/mobile-masthead/mobile-masthead.html',
    controller: 'NavCtrl as nav'
  };
};