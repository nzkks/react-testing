// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import GreetWithProps from './greet-with-props';

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<GreetWithProps />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('Greet renders with name', () => {
    render(<GreetWithProps name="NZKKS" />);
    const textElement = screen.getByText('Hello NZKKS');
    expect(textElement).toBeInTheDocument();
  });
});
