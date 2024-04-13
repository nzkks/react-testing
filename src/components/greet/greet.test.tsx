import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  // const textElement = screen.getByText('Hello'); // This will pass the test because of the exact case sensitiveness
  // const textElement = screen.getByText('hello'); // This will fail the test because of the lowercase first letter
  const textElement = screen.getByText(/hello/i); // This will pass the test. Usage of regex is to avoid test failure based on the case sensitiveness.
  expect(textElement).toBeInTheDocument();
});
