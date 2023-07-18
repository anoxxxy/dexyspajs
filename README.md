# DexySPA.js - developed by @anoxxxy
Lighweight basic single-page application (SPA) template with a navigation menu using Bootstrap 5.

DexySPA.js demo - https://anoxxxy.github.io/dexyspajs

This code provides a lighweight basic single-page application (SPA) template with a navigation menu using Bootstrap 5. It allows users to navigate between different pages within the application without refreshing the entire page.

The code sets up a navigation menu with tabs for different pages such as About, Bot, Balance, Login, and Logout. Each tab corresponds to a specific section on the page, which can be customized with content.

When a user clicks on a navigation link, the code uses JavaScript and Bootstrap to handle the tab switching functionality. The showPage function is responsible for showing the selected page and highlighting the active navigation link. It uses Bootstrap's tab method to show the selected tab.

The code also includes a lightweight routing library called RouterJS, which helps in managing the page navigation and handling URL changes. It defines route handlers for each page, allowing the appropriate page to be shown based on the URL.

Additionally, the code includes some logic to determine the availability of pages based on the user's login status. Certain pages like Bot, Balance, and Logout are only accessible when the user is logged in, while the Login page is only accessible when the user is logged out.

Overall, this code provides a foundation for building a basic SPA with a navigation menu and tab switching functionality using Bootstrap and JavaScript. It can be customized and extended to add more pages and functionality as needed.

Please note that the code also includes references to external CSS and JavaScript files, including Bootstrap 5 and the RouterJS library, which need to be included for the code to work properly.

Feel free to modify and enhance this code according to your specific requirements. Good luck with your project!

## Updates
DexySPA v0.22 - Updates:
- Removed JQuery dependency for improved performance and reduced file size.
- Improved handling of invalid routes for better error handling.
- Enhanced handling of unauthorized page access for enhanced security.
- Upgraded Router.JS for seamless navigation of hash-pages in VanillaJS.
- In addition to the updates mentioned above, the DexySPA framework now includes the `dexyspa.class.js` file. This file contains the `DexySPA` class, which serves as the core component of the DexySPA framework. You can use this class to initialize and configure your SPA.


## Features

- Dynamic page loading based on user's login status
- Smooth transition effects for tab switching
- Integration with Bootstrap for enhanced styling
- Routing functionality using RouterJS library

## Usage

To use this navigation menu in your project, follow these steps:

1. Clone the repository:
https://github.com/anoxxxy/dexyspajs.git


2. Include the necessary CSS and JavaScript files in your HTML file.
See index.html for easy understanding.

# Credits

RouterJS: https://github.com/silviodelgado/routerjs

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
