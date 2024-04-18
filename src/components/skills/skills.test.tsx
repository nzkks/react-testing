import { logRoles, render, screen, waitFor } from '@testing-library/react';
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
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    // The async methods findBy or findAllBy are used in a scenario where element is initially not present and wait (default wait/timeout is 1000ms) for appearance and return the element
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });

  test('Logged in success text is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container); // once checked, make sure to comment or better delete this line

    // screen.debug(); // once checked, make sure to comment or better delete the debug lines
    const loggedInSucess = await screen.findByText(
      'success',
      { exact: false },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(loggedInSucess).toBeInTheDocument();
  });

  test('Logged in success text is eventually disappeared', async () => {
    render(<Skills skills={skills} />);

    // The waitFor async helper function retries until the wrapped function stops throwing an error. This can be used to assert that an element disappears from the page.

    // element is initially present...
    // note use of queryBy instead of getBy to return null
    // instead of throwing in the query itself
    await waitFor(() => {
      expect(
        screen.queryByText('success', { exact: false })
      ).not.toBeInTheDocument();
    });
  });
});
