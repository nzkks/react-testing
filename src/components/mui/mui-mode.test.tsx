import { render, screen } from '../../test-utils';
import { MuiMode } from './mui-mode';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />);

    expect(screen.getByRole('heading')).toHaveTextContent('dark mode');
  });
});
