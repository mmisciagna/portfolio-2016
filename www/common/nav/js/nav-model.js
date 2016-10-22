var nav = angular.module('nav.model', []);



// Nav model constructor
nav.Model = function() {
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
};


// Returns the nav items
nav.Model.prototype.getNavItems = function() {
  return this.navItems;
};

nav.service('NavModel', nav.Model);
