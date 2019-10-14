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


