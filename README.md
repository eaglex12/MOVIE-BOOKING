# About this site

The project consists of a React application that displays a list of TV shows and allows the user to select shows they want to watch. The user can then confirm their selection on a separate confirmation page.

The application uses the React Router library for navigation and makes API calls to a ShowService to retrieve the list of TV shows. The list of shows is stored in the application state using the useState hook and rendered in the ShowList component.

The user can select shows by clicking on them in the ShowList component, which toggles a selected property on the corresponding show object. The selected shows are stored in the application state and passed to the ConfirmationPage component, which displays them in a list and allows the user to confirm their selection.

The application also includes some basic styling using CSS.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

