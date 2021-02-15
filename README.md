# Copia React Challenge Project
### `yarn install`
Installs the dependencies needed for this project.
### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

**This project is configured to utilize Redux DevTools browser plugin (Chrome, Edge, and Firefox). However, you can also use the standalone app or integrate a react component into this project if you prefer. Refer to the Redux DevTools link above to get started.**

Documentation links:
[Semantic UI React](https://react.semantic-ui.com)
[React Redux](https://react-redux.js.org/)
[Redux Toolkit](https://redux-toolkit.js.org/)
[Redux DevTools](https://github.com/reduxjs/redux-devtools)
## Summary:
In App.js, you will be adding a table with pagination to display some mock data of users. This project already includes the necessary dependencies for getting started, but you're also free to add any dependencies you feel will help you tackle this challenge. 
## Objectives:
	- mockSlice.js has an action called 'getMockUsers' which acts as a fake endpoint, providing a set of 100 random users. App.js is already set up to retrieve the data from the mock endpoint.
	- Add a Table component and generate the rows dynamically with the mock data provided.
	- The table should have columns for the following:
		- Company Name
		- Email
		- Phone
		- Address (street, suite, city, zip code)
		- Website
		- Date (createdAt)
	- The 'createdAt' field is a randomly generated date between now and 1 month ago. For any user that has a date over 21 days from now, highlight that row in red to indicate that it needs attention.
	- Include the pagination component, which should be configured to display 10 items per page. It should also include ellipsis, first/last nav, and previous/next nav options.
	- The header of each column in the table should sort ascending/descending order, alphabetically & numerically.
	- Toggling the ascending/descending order should sort the entire data set, not just the items in the currently viewed page.
	- Bonus: Add a search input that filters the list based on Company Name, Email, Address or Website. The filtering should be based on strings that contain the characters provided in the input, rather than being an exact match.

---------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).