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

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');

    await user.type(amountInput, '10');

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', { name: 'Set' });

    await user.click(setButton);

    expect(screen.getByRole('heading')).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', { name: 'Set' });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
