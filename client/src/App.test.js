import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import App from './App';


afterEach(rtl.cleanup);

test("Render the App", () => {
  const wrapper = rtl.render(<Header />);
 wrapper.queryByText(/Women's world cup/i)
});

// test('name is found', () => {
//   const {getByText} = rtl.render(<App />);
//   getByText('Country')
// });
