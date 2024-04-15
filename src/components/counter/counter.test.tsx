import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    userEvent.setup();
    render(<Counter />);

    await userEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    await userEvent.click(screen.getByRole('button', { name: 'Set' }));
    expect(screen.getByRole('heading')).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    userEvent.setup();
    render(<Counter />);

    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Increment' })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('spinbutton')).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Set' })).toHaveFocus();
  });
});
