import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';


afterEach(rtl.cleanup);

test("Render the App", () => {
  const wrapper = rtl.render(<App />);
 wrapper.queryByText(/Women's world cup/i)
});

test("Find country", () => {
  const wrapper = rtl.render(<App />);
 wrapper.queryByText(/country/i)
});

test("Find country", () => {
  const wrapper = rtl.render(<App />);
 wrapper.queryByText(/searches/i)
});

// I KEEP GETTING THIS ERROR AT THE END OF THE TESTS ALTHOUGH THE TESTS PASS. 

/* Watch Usage: Press w to show more.  console.error node_modules/react-dom/cjs/react-dom.development.js:558
    Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
        in App (at App.test.js:11) */

/* ** Also Note, Kept having issues with running the tests, I finally figured out that it was because My reacstrap & bootstrap dependencies were install in package.json in root folder
 rather then Client package.json. Tests kept telling me it found Container.js (which I do not have) but used Container for Reacstrap. */

