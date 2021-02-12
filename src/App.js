import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getMockUsers } from './store/slices/mockSlice';

/**
 * Copia React Project Challenge
 * 
 * Summary:
 * In this App.js file, you will be adding a table with pagination to display some mock data of users. This view should be able to segment the items in the mock data array as chunks of 10, and properly re-render the screen with the appropriate chunk of data for the associated page currently being viewed. This project already includes the necessary dependencies for getting started, but you're also free to add any dependencies you feel will help tackle this challenge. Depending on how you go about solving this, you may need to modify the redux state object. The slice is located here: ./store/slices/mockSlice.js
 * 
 * ! This app is configured to utilize Redux DevTools for redux state management. It is currently configured for using with the browser plugin (Chrome, Edge, and Firefox), which would be the easiest way to get started. However, you can also use the standalone app or integrate a react component into this project if you prefer. Refer to https://github.com/reduxjs/redux-devtools for getting started.
 * 
 * ! To ensure you have the proper dependencies installed, please run 'yarn install' before initializing the development server with 'npm start'.
 * 
 * Table Component: https://react.semantic-ui.com/collections/table/
 * 
 * Objectives:
 * - Add a Table component and generate the rows dynamically with the mock data provided.
 * - Include the pagination component, which should be configured to display 10 items at a time. It should also include ellipsis, first/last nav, and previous/next nav options.
 * - The header of each column in the table should sort ascending/descending order, alphabetically & numerically.
 * - Toggling the ascending/descending order should sort the entire data set, not just the items in the currently viewed page.
 * - Some of the items will contain a status of 'error' or 'warning'. Highlight those rows using the error and warning props provided in the Semantic UI docs.
 * - You are free to separate any components into their own files by creating a 'components' directory, or you can include all the logic within this file. Either is ok.
 * 
 */

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mock.users);

  console.log("users : ", users);

  useEffect(() => {
    dispatch(getMockUsers());
  }, [])

  return (
    <Grid>
      Your code here
    </Grid>
  )
}

export default App;
