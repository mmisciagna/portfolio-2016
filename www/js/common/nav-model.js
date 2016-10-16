var navModel = angular.module('nav.model', []);


navModel.service('NavModel', function() {
  this.navItems = [
    {
      'label': 'Intro',
      'route': '#/intro'
    },
    {
      'label': 'Work',
      'route': '#/work'
    },
    {
      'label': 'Résumé',
      'route': '#/resume'
    },
    {
      'label': 'Contact',
      'route': 'https://teams.googleplex.com/u/mmisciagna'
    }
  ];

  this.getNavItems = function() {
    return this.navItems;
  };
});
