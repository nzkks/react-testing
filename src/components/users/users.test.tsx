import { render, screen } from '@testing-library/react';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);

    expect(screen.getByText('Users')).toBeInTheDocument();
  });
});
