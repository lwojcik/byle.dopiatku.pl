import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders wihtout crashing', () => {
  const RenderedApp = render(<App />);
  expect(RenderedApp).toBeInTheDocument();
});
