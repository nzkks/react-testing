import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // getByRole has other options as well: name, level, hidden, selected, checked, pressed

    const pageHeadingElement = screen.getByRole('heading', {
      level: 1
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole('heading', {
      level: 2
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory'); // getByText is used for testing the div,p and span tags
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText('ields are manda', { exact: false }); // substring match
    expect(paragraphElement2).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imgElement = screen.getByAltText('a person with a laptop'); // getByAltText is used for elements which supports alt attribute like img, <input />, <area /> or custom HTML elements with alt tag
    expect(imgElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name' // label text of this textbox
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input'
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('NZKKS');
    expect(nameElement4).toBeInTheDocument();

    const nameElement5 = screen.getByDisplayValue('nzkks', { exact: false }); // ignore case
    expect(nameElement5).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio' // label text of this textarea
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
    expect(termsElement2).toBeInTheDocument();

    const termsElement4 = screen.getByLabelText('i agree', { exact: false }); // ignore case, substring match
    expect(termsElement4).toBeInTheDocument();

    const termsElement3 = screen.getByLabelText('gree to the term', { exact: false }); // substring match
    expect(termsElement3).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
