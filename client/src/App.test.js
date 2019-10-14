import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';


afterEach(rtl.cleanup);


test('name is found', () => {
  const {getByText} = rtl.render(<App />);
  getByText('Country')
});
