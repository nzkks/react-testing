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

### User Interactions

#### Convenience APIs

**Clicks**
`click()`
`dblClick()`
`tripleClick()`

**Mouse movement**
`hover()`
`unhover()`

##### Keyboard

`tab()`

#### Utility APIs

`clear()`
`selectOptions()`
`deselectOptions()`
`type()`
`upload()`

#### Clipboard

`copy()`
`cut()`
`paste()`

#### Pointer

`pointer({keys: '[MouseLeft]'})`
`pointer({keys: '[MouseLeft][MouseRight]'})`

We can also just pass the string like below if 'keys' is the only argument to the function
`pointer('[MouseLeft][MouseRight]')`

In order to press a button without releasing it, the button name is suffixed with >
`pointer('[MouseLeft>]')`

For just releasing a previously pressed button, the tag is started with /
`pointer('[/MouseLeft]')`

#### Keyboard

`keyboard('foo')` translates to: f, o, o
`keyboard('{Shift}{f}{o}{o}')` translates to: Shift, f, o, o
`keyboard('{Shift>}A{/Shift}')` translates to: Shift(down), A, Shift(up)

---

### Static Analysis testing

Static testing analyses aspects such as readability, consistency, error handling, type checking and alignment with best practices

#### ES Lint

1. Install `ESLint` VSCode extension.
2. `npm i -D eslint-plugin-jest-dom`
3. In the `package.json` file, add `"eslintConfig": { "extends": [ "plugin:jest-dom/recommended"] },`
4. Again in the `package.json` file, add a npm script command `"scripts": { "lint": "eslint --ignore-path .gitignore .", },`

#### Prettier

1. Install `Prettier` VSCode extension. With this, we can add VSCode settings like `editor.defaultFormatter` and `editor.formatOnSave`, etc
2. `npm i -D --exact prettier`
3. In the `package.json` file, add a npm script command `"scripts": { "format": "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\"", },`
4. Add `.prettierrc.json` and add any formatting rules. example: `{ "semi": true, "singleQuote": true }`
5. `npm i -D eslint-config-prettier`
6. In the `package.json` file, add `"eslintConfig": { "extends": [ "eslint-config-prettier" ] },`

#### Husky

**pre-commit**

1. `npx husky-init && npm install`. This will create .husky folder with `pre-commit` cmmand file. By default there will be a npm command to run the test.
2. Now we can change it to run lint and format npm scripts with `npm run lint && npm run format`

**pre-push**

1. `npx husky add .husky/pre-push "npm test -- --watchAll=false"`. Tgis will create a `pre-push` command file with the specfied line. Basically before pushing the commit to remote, run the test. If all the tests are successful then push it.

#### Lint-Staged

1. `npm i -D lint-staged`
2. In the Husky's `pre-commit` command file, replace the `npm run lint && npm run format` line to `npx lint-staged`. This will make sure, instead of running the linting and formatting to all project/application files, just the staged files.
3. In the `package.json` file, add `"lint-staged": { "*.{ts,tsx}": [ "eslint" ], "*.{ts,tsx,css,scss}": [ "prettier --write" ] }`
