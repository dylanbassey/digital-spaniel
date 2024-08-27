# Self Review

This is a small self-review on what I could have done better or what I could have done if I had spent more time.

## Styled components

I used styled-components throughout the project as it allows for cleaner code and improved readability. For future projects I should have tried to implement more global components that I could use throughout the project, I found myself repeating the same CSS styling for multiple different components and would have allowed for cleaner code if I implemented a global styling. 

## Nav

For the design spec, I felt that the top navigation did not account for when a user would scroll down and the white text would be lost in the background. Therefore I implemented the given navigation but changed the color to a more grey to maintain the design but also be shown to a user if they were to scroll to a white background. Also in future work, I will improve the mobile navigation. An afterthought occurred and I did not realise at the time of implementation how it did not fit the website's theme and looked very basic.

## Data 

I had two options for fetching the testimonial data. Using Context API or redux kit requests. If you look at the project I have implemented both methods however in practise I only used the Context API to fetch the data as I believe this was more appropriate and would mirror a real-life case when fetching mocked offline data stored locally.

## Case studies

Due to time, I was unable to complete this section of the design spec, however, in future, I will create a custom component for this image viewer and add the ability to press an arrow button to swipe between different case studies.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
