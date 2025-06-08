# @kudo/toolbox

A lightweight React utility components library inspired by Solid.js.  
Includes components like **Switch**, **Match**, **Show**, **Dynamic**, and **For** — enabling expressive and declarative UI patterns in React.

---

## ✨ Features

- 🧩 Simple `Switch` / `Match` control flow components
- 👁️ `Show` component for conditional rendering
- 🔄 `Dynamic` component for dynamic component instantiation
- 🔁 `For` component for declarative iteration
- 🪶 Small bundle size, no dependencies
- 🦄 TypeScript support

---

## 📦 Installation

```bash
npm install @kudo/toolbox
````

or

```bash
yarn add @kudo/toolbox
```

---

## 🚀 Usage

### Switch / Match

```tsx
import { Switch, Match } from '@kudo/toolbox';

function Example({ value }: { value: number }) {
  return (
    <Switch>
      <Match when={value === 1}>One</Match>
      <Match when={value === 2}>Two</Match>
      <Match when={value === 3}>Three</Match>
    </Switch>
  );
}
```

### Show

```tsx
import { Show } from '@kudo/toolbox';

function Example({ loggedIn }: { loggedIn: boolean }) {
  return (
    <Show when={loggedIn}>
      <p>Welcome back!</p>
    </Show>
  );
}
```

### Dynamic

```tsx
import { Dynamic } from '@kudo/toolbox';

const components = {
  one: () => <div>Component One</div>,
  two: () => <div>Component Two</div>,
};

function Example({ type }: { type: 'one' | 'two' }) {
  const Component = components[type];
  return <Dynamic component={Component} />;
}
```

### For

```tsx
import { For } from '@kudo/toolbox';

function Example() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <For each={items}>
      {(item, index) => (
        <div key={index}>
          {index + 1}. {item}
        </div>
      )}
    </For>
  );
}
```

---

## 💻 Components API

### `<Switch>`

Renders the first `<Match>` whose `when` prop evaluates to `true`.

### `<Match>`

* **when** (boolean | ReactElement | undefined): The condition to match.

### `<Show>`

* **when** (boolean | ReactElement | undefined): The condition to show the children.

### `<Dynamic>`

* **component** (React component): The component to dynamically render.

### `<For>`

* **each** (array): The array to iterate over.
* **children** (function): A render function of the form `(item, index) => ReactNode`.

---

## 📚 License

MIT

---

## 🙏 Acknowledgements

Inspired by [Solid.js control flow components](https://www.solidjs.com/docs/latest/api#control-flow).