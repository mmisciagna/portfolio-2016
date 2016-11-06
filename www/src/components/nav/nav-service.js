module.exports = class navService {
  constructor() {
    this.navItems = [
      {
        label: 'Intro',
        route: '#/intro'
      },
      {
        label: 'Work',
        route: '#/work'
      },
      {
        label: 'Résumé',
        route: '#/resume'
      },
      {
        label: 'Contact',
        route: 'https://teams.googleplex.com/u/mmisciagna'
      }
    ];
  }

  // Returns the nav items
  getNavItems() {
    return this.navItems;
  }
};
