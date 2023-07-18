/*!
  * DexySpa.js v0.22 (https://wwwinterart.com/)
  * Copyright 2023 Silvio Delgado (https://github.com/anoxxxy)
  * Licensed under MIT (https://opensource.org/licenses/MIT)
  * https://github.com/anoxxxy/routerjs
  */

class DexySPA {
  'use strict';
  /**
   * Create an instance of DexySPA.
   * @param {Router} router - The router instance.
   * @param {Object} pagePermissions - The page permissions configuration.
   * @param {string} [defaultPage='about'] - The default page to navigate to when unauthorized page access occurs.
   * @param {function} [unauthorizedPageAccessCallback] - The callback function to handle unauthorized page access.
   * @param {function} [invalidRouteCallback] - The callback function to handle invalid routes.
   */
  constructor(router, pagePermissions, defaultPage = 'start', unauthorizedPageAccessCallback, invalidRouteCallback) {
    this.version = 'v0.22';
    this.isLoggedIn = false;
    this.router = router;
    this.pagePermissions = pagePermissions;
    this.currentPage = '';
    this.defaultPage =  defaultPage;
    this.unauthorizedPageAccessCallback = unauthorizedPageAccessCallback;
    this.invalidRouteCallback = invalidRouteCallback;
    this.init();
  }

  /**
   * Initialize DexySPA.
   */
  init = () => {
    this.setVersion();
    this.initNavigation();
    this.initRouter();
    this.startRouter();
  }

  /**
   * Set the version of DexySPA.
   */
  setVersion = () => {
    const versionElement = document.querySelectorAll('[data-show="version"]');
    versionElement.forEach((el) => {
        el.textContent = this.version;
      });
  }

  /**
   * Initialize the navigation links.
   */
  initNavigation = () => {

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = link.dataset.page;
        this.navigateToPage(page);
      });
    });
  }

  /**
   * Initialize the router and define routes.
   */
  initRouter = () => {
    this.router
      .add(/^$/, this.handleStartPage)
      .add(/login/, (data) => {
        console.log('**DexySPA.js - Login page');
        this.login();
      })
      .add(/logout/, (data) => {
        console.log('**DexySPA.js - Logout page');
        this.logout();
      })
      .add(/(.*)/, this.handleNotFoundPage)
      .beforeAll(this.handleBeforeRoute)
      .afterAll(this.handleAfterRoute)
      .apply();
  }

  /**
   * Start the router.
   */
  startRouter = () => {
    this.router.start();
  }

  // >> Routing Pages
  /**
   * Handler for the start page.
   */
  handleStartPage = (data) => {
    console.log('**DexySPA.js - Start page**');
    // Perform actions specific to the start page
  }

  /**
   * Handler for the not found page.
   */
  handleNotFoundPage = (data) => {
    console.log('**DexySPA.js - 404-error - Not found page');

    // Get the requested page from the URL parameters
    const requestedPage = this.router.urlParams.page;

    // Check if the requested page exists in the pagePermissions object
    const isPageInPagePermissions = Object.keys(this.pagePermissions).includes(requestedPage);

    console.log('isPageInPagePermissions: ', isPageInPagePermissions);

    // If the requested page is not found in the pagePermissions, handle it as an invalid route
    if (!isPageInPagePermissions) {
      this.handleInvalidRoute();
      return;
    }
  }

  handleBeforeRoute = () => {
    console.log('\n**DexySPA.js - Run Before All Routes!', this.router.urlParams.page);
    const requestedPage = this.router.urlParams.page;
    const canAccessPage = this.canAccessPage(requestedPage);
    if (!canAccessPage) {
      this.handleUnauthorizedPageAccess(requestedPage);
      return;
    }
    if (this.getCurrentPage() !== requestedPage)
      this.showPage(requestedPage);
  };

  handleAfterRoute = () => {
    console.log('\n**DexySPA.js - Run After All Routes!', this.router.urlParams.page);
  };

  // << Routing Pages

  /**
   * The currently displayed page.
   * @type {string}
   */
  getCurrentPage = () => {
    console.log('=== getCurrentPage: ', this.router.urlParams.page);
    return this.currentPage;
  }


  /**
   * Show the specified page.
   * @param {string} page - The page to show.
   */
  showPage = (page) => {
    if (page === '')   // Skip the function execution if the page is empty
      return;

    console.log('===showPage: ', page);

    const navLinks = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    tabPanes.forEach((pane) => {
      pane.classList.remove('show', 'active');
    });

    const pageLink = document.querySelector(`[data-page="${page}"]`);
    const pageElement = document.getElementById(page);

    if (pageLink) {
      pageLink.classList.add('active');
    }

    if (pageElement) {
      pageElement.classList.add('show', 'active');
    }

    this.router.navigate(page);
    this.currentPage = page;
  }

  /**
   * Check if the current user can access the page.
   * @param {string} page - The page to check access for.
   * @returns {boolean} - True if the user can access the page, false otherwise.
   */
  canAccessPage = (page) => {
    console.log('===canAccessPage: ', page);

    // Check if the page is available based on the boolean value (for all users)
    const availability = this.pagePermissions[page];

    // Check if the page is available based on the user login status
    const isAvailable = typeof availability === 'function'
    ? availability(this.isLoggedIn)
    : availability === true || availability === this.isLoggedIn;

    console.log('isAvailable: ', isAvailable); // Log the boolean value

    return isAvailable;
  }

  /**
   * Navigate to the specified page.
   * @param {string} page - The page to navigate to.
   */
  navigateToPage = (page) => {
    console.log('\n===navigateToPage: ', page);
    if (this.canAccessPage(page)) {
      this.showPage(page);
    } else {
      this.handleUnauthorizedPageAccess(page);
    }
  }

  /**
   * Handle unauthorized page access.
   * @param {string} page - The unauthorized page accessed.
   */
  handleUnauthorizedPageAccess = (page) => {
  // Check if an unauthorizedPageAccessCallback is provided
  if (this.unauthorizedPageAccessCallback) {
    // You can handle the unauthorized page access in your own callback function
    this.unauthorizedPageAccessCallback(page);
  } else {
    // Check if the unauthorized page access is in the pagePermissions
    const isPageInPagePermissions = Object.keys(this.pagePermissions).includes(page);

    console.log('isPageInPagePermissions: ', isPageInPagePermissions);

    // If the unauthorized page access is in the pagePermissions, handle it as an unauthorized route
    if (isPageInPagePermissions) {
      console.log('Unauthorized page access: ', page);
      alert(`Unauthorized page access: ${page}`);
      this.navigateToPage(this.defaultPage);
    }
  }
}


  /**
   * Handle invalid route.
   */
  handleInvalidRoute = () => {
    
    if (this.invalidRouteCallback) {
      // You can handle the invalid route access in your own callback function
      this.invalidRouteCallback();
    } else {
      console.log('Invalid route detected');
      alert('Invalid route detected');
      // Handle the invalid route according to your default behavior
      this.navigateToPage(this.defaultPage);
    }
  }


  /**
   * Perform the login operation.
   */
  login = () => {
    console.log('User logged in');
    this.isLoggedIn = true;
  }

  /**
   * Perform the logout operation.
   */
  logout = () => {
    console.log('User logged out');
    this.isLoggedIn = false;
  }
}