import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);

    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  // test('renders a list of users', async () => {
  //   render(<Users />);
  //   expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  // });

  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);
    expect(await screen.findByText('Error fetching users')).toBeInTheDocument();
  });
});
