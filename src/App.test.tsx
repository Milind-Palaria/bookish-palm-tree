import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


// Define a test
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Find an element with the text "learn react"
  const linkElement = screen.getByText(/learn react/i);
  
  // Expect the element to be in the document
  expect(linkElement).toBeInTheDocument();
});
