// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import GreetWithProps from '../components/greet/greet-with-props';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<GreetWithProps />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Greet Name', () => {
  test('renders with name', () => {
    render(<GreetWithProps name="NZKKS" />);
    const textElement = screen.getByText('Hello NZKKS');
    expect(textElement).toBeInTheDocument();
  });
});
