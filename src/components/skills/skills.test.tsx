import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning'
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    // The async methods findBy or findAllBy are used in a scenario where element is initially not present and wait (default wait/timeout is 1000ms) for appearance and return the element
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning'
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
