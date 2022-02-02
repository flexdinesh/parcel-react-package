import { render, screen } from '@testing-library/react';
import {HelloWorld} from './HelloWorld';

test('renders HelloWorld', () => {
  render(<HelloWorld />);
  const renderedElement = screen.getByText(/Hello, Jane/i);
  expect(renderedElement).toBeInTheDocument();
});
