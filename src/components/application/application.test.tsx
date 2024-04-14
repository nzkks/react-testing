import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole('heading', {
      name: 'Job Application Form'
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole('heading', {
      name: 'Section 1'
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name' // label text of this textbox
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio' // label text of this textarea
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
