import { render, screen } from '@testing-library/react';
import { Counter } from './counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });
});
