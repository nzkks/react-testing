// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import GreetWithProps from './greet-with-props';

describe('Greet', () => {
  fit('renders correctly', () => {
    render(<GreetWithProps />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Greet Name', () => {
  it('renders with name', () => {
    render(<GreetWithProps name="NZKKS" />);
    const textElement = screen.getByText('Hello NZKKS');
    expect(textElement).toBeInTheDocument();
  });
});
