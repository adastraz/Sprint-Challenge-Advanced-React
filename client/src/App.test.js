import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders without crashing', () => {
  render(<App />);
});

test('ohman', () => {
  const test = render(<App />)
  test.getByText(/lol/i)
})

test('please', () => {
  const test = render(<App />)
  test.getByTestId(/bigone/i)
})