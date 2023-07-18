# DexySPA.js - developed by @anoxxxy
Lighweight vanillajs basic single-page application (SPA) template with a navigation menu using Bootstrap 5.

DexySPA.js demo - https://anoxxxy.github.io/dexyspajs

This code provides a lighweight basic single-page application (SPA) template with a navigation menu using Bootstrap 5. It allows users to navigate between different pages within the application without refreshing the entire page.

The code sets up a navigation menu with tabs for different pages such as About, Bot, Balance, Login, and Logout. Each tab corresponds to a specific section on the page, which can be customized with content.

When a user clicks on a navigation link, the code uses JavaScript and Bootstrap to handle the tab switching functionality. The showPage function is responsible for showing the selected page and highlighting the active navigation link. It uses Bootstrap's tab method to show the selected tab.

The code also includes a lightweight routing library called RouterJS, which helps in managing the page navigation and handling URL changes. It defines route handlers for each page, allowing the appropriate page to be shown based on the URL.

Additionally, the code includes some logic to determine the availability of pages based on the user's login status. Certain pages like Bot, Balance, and Logout are only accessible when the user is logged in, while the Login page is only accessible when the user is logged out.

Furthermore, the code incorporates user membership pages. It allows for the definition of specific pages that are accessible only to users with certain membership levels. This feature enables the creation of exclusive content and tailored experiences based on user membership.

Overall, this code provides a foundation for building a basic SPA with a navigation menu, tab switching functionality, routing support, and user membership pages using Bootstrap and JavaScript. It can be customized and extended to add more pages, functionality, and membership levels as needed.

Please note that the code includes references to external CSS and JavaScript files, including Bootstrap 5 and the RouterJS library, which need to be included for the code to work properly.

Feel free to modify and enhance this code according to your specific requirements. Good luck with your project!

## Updates
DexySPA v0.24 - Updates:
- Added support for VIP memberships with dynamic page access permissions based on user's membership level
- Updated comments and improved code readability
- Replaced "data-page" with "data-page-link" for nav-links
- Added "data-page" for pages as an alternative for "#id-navigation"


## Updates
DexySPA v0.22 - Updates:
- Removed JQuery dependency for improved performance and reduced file size.
- Improved handling of invalid routes for better error handling.
- Enhanced handling of unauthorized page access for enhanced security.
- Upgraded Router.JS for seamless navigation of hash-pages in VanillaJS.
- In addition to the updates mentioned above, the DexySPA framework now includes the `dexyspa.class.js` file. This file contains the `DexySPA` class, which serves as the core component of the DexySPA framework. You can use this class to initialize and configure your SPA.


## Features

- **Routing Support:** DexySPA utilizes a modified version of RouterJS, an open-source lightweight routing library by silviodelgado, to facilitate seamless navigation and URL parameter handling.
- **Single-Page Application (SPA) Framework:** DexySPA empowers you to create dynamic and interactive SPAs, enhancing the user experience.
- **Easy Integration:** You can effortlessly integrate DexySPA into your existing web projects, leveraging its modular and flexible architecture.
- **Page Permissions:** DexySPA offers a page permission configuration system, allowing you to define access controls for different pages based on user authentication and other custom criteria.
- ** User Membership Pages: DexySpa.js supports the definition of specific pages that are accessible only to users with specific membership levels. This feature enables the creation of exclusive content and tailored experiences based on user membership.


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
