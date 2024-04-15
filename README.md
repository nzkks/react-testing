# React Testing Library (RTL)

Lets say, in the (CRA created) package.json, there is a npm script line
`"test": "react-scripts test"`

**Type below to run the test**
`npm run test`

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

First choice is by using `getByRole` or `getAllByRole` method. If not possible then `getByLabelText` or `getAllByLabelText`. If not possible then `getByPlaceholderText` or `getAllByPlaceholderText`. The pattern goes on like this.

**screen.**

| Individual Element        | Multiple Elements            |
| ------------------------- | ---------------------------- |
| 1. `getByRole`            | 1. `getAllByRole`            |
| 2. `getByLabelText`       | 2. `getAllByLabelText`       |
| 3. `getByPlaceholderText` | 3. `getAllByPlaceholderText` |
| 4. `getByText`            | 4. `getAllByText`            |
| 5. `getByDisplayValue`    | 5. `getAllByDisplayValue`    |
| 6. `getByAltText`         | 6. `getAllByAltText`         |
| 7. `getByTitle`           | 7. `getAllByTitle`           |
| 8. `getByTestId`          | 8. `getAllByTestId`          |
