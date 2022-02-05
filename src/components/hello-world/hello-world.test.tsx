import { render, screen } from '@testing-library/react';
import { HelloWorld } from './hello-world';

test('render HelloWorld', () => {
  render(<HelloWorld />);
  const renderedElement = screen.getByText(/Hello, Jane/i);
  expect(renderedElement).toBeInTheDocument();
});
