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

---

#### Query methods

**Order of priority for using RTL queries (query methods)**

1. `ByRole`
2. `ByLabelText`
3. `ByPlaceholderText`
4. `ByText`
5. `ByDisplayValue`
6. `ByAltText`
7. `ByTitle`
8. `ByTestId`

#### To assert elements that DOES exists in the DOM, use get / getAll methods

**Example**
`screen.getByRole` OR `screen.getAllByRole`

#### To assert elements that DOES NOT exists in the DOM, use query / queryAll methods

**Example**
`screen.queryByRole` OR `screen.queryAllByRole`

#### To assert elements that DOES NOT exists in the DOM initially. But eventually appears

**Example**
`screen.findByRole` OR `screen.findAllByRole`

---

**Install 'Testing Playground' Chrome extension and select the elements of interest to test. The tool suggests the best query method to use for us to copy / understand.**

---

#### Pointer Interactions

**Convenience APIs**

`click()`
`dblClick()`
`tripleClick()`
`hover()`
`unhover()`

**Pointer APIs**
`pointer({keys: '[MouseLeft]'})`
`pointer({keys: '[MouseLeft][MouseRight]'})`

We can also just pass the string like below if 'keys' is the only argument to the function
`pointer('[MouseLeft][MouseRight]')`

In order to press a button without releasing it, the button name is suffixed with >
`pointer('[MouseLeft>]')`

For just releasing a previously pressed button, the tag is started with /
`pointer('[/MouseLeft]')`
