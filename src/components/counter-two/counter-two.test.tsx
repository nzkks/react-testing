import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterTwo } from './counter-two';

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    expect(screen.getByText('Counter Two')).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    userEvent.setup();
    const incrementHandler = jest.fn(); // mocking functions
    const decrementHandler = jest.fn(); // mocking functions

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(incrementHandler).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
