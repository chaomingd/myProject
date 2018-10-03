# demo-paidpost-core
A demo of a Paid Post built with React and paidpost-core.

## Instructions
1. Clone this repository
2. `yarn` or `npm install`
3. `yarn run serve` or `npm run serve` to start a development server
3. `yarn run guide` or `npm run guide` to start [React Styleguidist](https://github.com/sapegin/react-styleguidist)
4. `yarn run build` or `npm run build` to create a development build
5. `yarn run prod` or `npm run prod` to create a production build

## Creating Project-Specific Components

If you create a React component within `src/components`, it'll show up in React Styleguidist when you run `npm run guide`.

Here's an example folder structure for a component that React Styleguidist knows how to preview:

- src
  - components
    - MyComponent
      - index.jsx
      - MyComponent.js

Above, `index.jsx` is an "index" file that just imports and exports the component:

```jsx
import MyComponent from "./MyComponent";
export default MyComponent;
```

Within a component's folder, you can also create a Markdown file with [a custom React Styleguidist preview](https://github.com/sapegin/react-styleguidist/blob/master/docs/GettingStarted.md#documenting-components) for your component.

Please refer to [React Styleguidist · Documenting Components](https://github.com/sapegin/react-styleguidist/blob/master/docs/GettingStarted.md#documenting-components) for more information.
