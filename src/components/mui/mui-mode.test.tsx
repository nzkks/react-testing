import { render, screen } from '@testing-library/react';
import { MuiMode } from './mui-mode';
import { AppProviders } from '../../providers/AppProviders';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProviders
    });

    expect(screen.getByRole('heading')).toHaveTextContent('dark mode');
  });
});
