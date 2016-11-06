/**
 * Configures html5Mode and router states.
 *
 * @param {!angular.$routeProvider} $routeProvider
 * @ngInject
 */
module.exports = ($routeProvider) => {
  $routeProvider.when('/', {
    redirectTo: '/intro'
  }).when('/intro', {
    controller: 'NavCtrl as nav',
    templateUrl: '/src/components/intro/intro.html'
  }).when('/work', {
    controller: 'WorkCtrl as work',
    templateUrl: '/src/components/work/work.html'
  }).when('/resume', {
    templateUrl: '/src/components/resume/resume.html'
  }).otherwise({
    redirectTo: '/intro'
  });
}
