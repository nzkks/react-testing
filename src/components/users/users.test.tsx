import { render, screen } from '@testing-library/react';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);

    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  // test('renders a list of users', async () => {
  //   render(<Users />);
  //   const users = await screen.findByRole('list');
  //   expect(users).toContainHTML('<li></li>');
  // });
});
