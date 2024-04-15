# React Testing Library (RTL)

Lets say, in the (CRA created) package.json, there is a npm script line "test": "react-scripts test"

**Type below to run the test**
npm run test

Once shown the test results the application will be in watch mode.

#### While in watch mode...

press w to show below

- Press a to run all tests.
- Press f to run only failed tests.
- Press q to quit watch mode.
- Press p to filter by a filename regex pattern.
- Press t to filter by a test name regex pattern.
- Press Enter to trigger a test run.

#### Order of priority for using RTL queries (query methods).

First choice is by using getByRole method. If not possible then getByLabelText. If not possible then getByPlaceholderText. The pattern goes on like this.

**screen.**

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue

===================

6. getByAltText
7. getByTitle

===================

8. getByTestId
