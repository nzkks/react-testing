import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

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

  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.click(incrementButton);

    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });
});
