/*!
 * DexySPA.js v0.1
 * Copyright 2023 @anoxy (https://github.com/anoxxxy)
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 * https://github.com/anoxxxy/dexyspajs
 */
$(document).ready(function() {
  const dexySPAversion = 'v0.1';

  //set DexySPA.js version
  $('[data-show="version"]').text(dexySPAversion);

  // Set the user's login status
  let isUserLoggedIn = true;

  // Function to show the selected page
  const showPage = (page) => {
    console.log('==showPage: ', page);
    // Remove active class from navigation links
    $('.nav-link').removeClass('active');
    // Hide all navigation pages
    $('.tab-pane').removeClass('show active')

    // Set active class on the clicked navigation link
    $(`[data-page="${page}"]`).addClass('active');

    // Show the corresponding page, the bootstrap code below handles it better
    //$(`#${page}`).addClass('show active');

    // Show the selected tab using Bootstrap's tab method
    $('#' + page).tab('show');
    Router.navigate(page);
  };

  // Check if the requested page is available based on user's login status
  const isPageAvailable = (page) => {
    console.log('=============isPageAvailable======================');
    console.log('isPageAvailable page: ', Router.urlParams.page);
    const pageAvailability = {
      about: true,
      start: true,
      bot: isUserLoggedIn,
      balance: isUserLoggedIn,
      market: isUserLoggedIn,
      login: !isUserLoggedIn,
      logout: isUserLoggedIn,
    };


    if (!pageAvailability[page])
      console.log('***Requested page is not available:', page);

    return pageAvailability[page];
  };

  // Configure the router
  Router
    .add(/^$/, function(data) {
      console.log('**Start page**');

    })
    .add(/about/, function(data) {
      console.log('About page');
      //showPage('about'); 
    })
    .add(/bot(.*)/, function(data) {
      console.log('Bot page');
      //showPage('bot'); 
    })
    .add(/balance/, function(data) {
      console.log('Balance page');
      //showPage('balance'); 
    })
    .add(/login/, function(data) {
      console.log('Login page');
      //showPage('login'); 
    })
    .add(/logout/, function(data) {
      console.log('Logout page');
      //showPage('login'); 
    })
    .add(/(.*)/, function(data) {
      console.log('404-error - Not found page');
    })
    .beforeAll(function(data) {
      console.log(' ');
      console.log('===Run Before All Routes!===')

      console.log('data: ', data);
      console.log('Router.urlParams.page: ', Router.urlParams.page);

      const requestedPage = Router.urlParams.page;
      if (!isPageAvailable(requestedPage)) { //console.log('Requested page is not available:', requestedPage);
        showPage('about') //// Redirect to the default-page if the requested page is not available for the user
        return;
      }

      showPage(requestedPage); // Show the requested page
    })
    .afterAll(function(data) {
      console.log(' ');
      console.log('===Run After All Routes!===')
    })

    .apply()
    .start();

  // Handle navigation clicks
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    const page = $(this).data('page');

    if (!isPageAvailable(page)) //console.log('Requested page is not available:', page);
      return;

    showPage(page); // Show the requested/clicked page
  });
});