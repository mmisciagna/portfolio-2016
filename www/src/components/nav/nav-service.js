/**
 * @typedef {{
 *   label: string,
 *   route: string
 * }}
 */
let navItem;



/**
 * Service for setting and getting the nav items
 */
module.exports = class NavService {
  constructor() {
    /**
     * @private @const {!Array<!navItem>}
     */
    this.navItems_ = [
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


  /**
   * @return {!Array<!navItem>}
   * @export
   */
  getNavItems() {
    return this.navItems_;
  }
};
