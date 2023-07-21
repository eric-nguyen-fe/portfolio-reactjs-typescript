## Glad to see you here!
## About Project

## Repository


## Design Workspace

## Languages and Frameworks
- CRA
- TypeScript v4.6.4
- SCSS (sass)
- React v18
- Babel v8
- Hygen
- Storybook v6
- ESLint
- Stylelint
- Redux
- Redux-toolkit
- ...
## Files/Directories

| Path                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| /.storybook/            | contains Storybook config files                             |
| /.eslintrc              | settings for `ESLint`                                       |
| /.hygen.js              | settings for `Hygen`                                        |
| /_templates/            | contains scaffolding templates based on `Hygen`             |
| /.stylelintrc.js        | settings for `Stylelint`                                    |
| /.vscode/               | settings for `Visual Studio Code` workspace                 |
| /package.json           | manifest file for Node.js projects                          |
| /tsconfig.json          | settings for `TypeScript`                                   |
| /dist/                  | contains production build codes                             |
| /public/                | root folder that gets served up as our react app.           |
| /src/components/        | contains Atomic Design components                           |
| /src/container/         | contains Logic handler                                      |
| /src/pages/             | contains pages                                              |
| /src/assets/            | contains images, movies, fonts                              |
| /src/store/             | contains shared store                                       |
| /src/services/          | contains shared services                                    |
| /src/styles/            | contains common styles: breakpoints, colors, font, mixin, function               |
| /src/index.tsx/         | contains root file                                          |
| /src/App.tsx            | contains application page index                             |
| /src/index.scss         | contains shared styles                                      |
| /src/react-app-env.d.ts | contains shared types                                       |
---

## Command Line

| Path                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| yarn start              | start the project                                           |
| yarn buid               | build the project                                           |
| yarn test               | run unit test                                               |
| gen:component           | generate new `atomic` component                             |
| gen:page                | generate new page                                           |
| yarn storybook          | run the storybook                                           |
| yarn lint:script        | run `Eslint` to check the syntax                            |
| yarn lint:style         | run `Stylelint` to check the syntax                         |
---

### `Atomic`

<https://bradfrost.com/blog/post/atomic-web-design/>

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `mapModifiers` to generate `modifiers`.**

```tsx
  export const Component: React.FC<Props> = props => (
    <div className={mapModifiers('a-sample', props.modifiers)}>{props.children}</div>
  );
```

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

### `Storybook`

**Note: Make sure that you have included all instances of the component in the storybook when building it.**

### `Unit Test`

- enzyme: <https://enzymejs.github.io/enzyme/docs/api/>
- jest: <https://jestjs.io/docs/en/25.x/getting-started.html>
- testing-library/react-hooks: <https://react-hooks-testing-library.com/usage/basic-hooks>

**Note: Make full test coverage for the component. If `NOT`, please notify your Leader.**

### `Typescript`

<https://www.typescriptlang.org/index.htm>

### `Redux/Redux-Toolkit`

- redux: <https://redux.js.org/>
- redux-toolkit: <https://redux-toolkit.js.org/>

### `React-router-dom`

<https://reactrouter.com/web/guides/quick-start>

### `Naming`

1. Service: `[serviceName]` + Service
```ts
  const getSystemDataService = async () => {
    // api handler
  }
```
2. Response / Request Params type: `[TypeName / RequestParamsName]` + Types
```tsx
  type SystemDataTypes = {
    // ...
  }

  type SystemParamsTypes = {
    // ...
  }
```
3. Store:
  - Reducer: `[Name]` + Reducer
  - Action: `[ActionName]` + Action
  - Action Prefix: `[ReducerName]/[ActionName]`
  - Slice: `[Name]` + Slice
  ```ts
    export const getSystemDataAction = createAsyncThunk<SystemDataTypes>(
      'systemReducer/getSystemDataAction',
      async (_, { rejectWithValue }) => {
        // ...
      },
    );

    export const systemSlice = createSlice({
      // ...
    })
  ```
4. Colors: <https://hexcol.com/> Enter code => Get Color name

## Generate Template
-   Generate component: `yarn gen:component → select level → enter component's name`
-   Generate page: `yarn gen:page → enter component's name`