# 📦 React Import & Export Explained

This guide covers how to **import and export components** in React using both **default** and **named exports**, including when and how to use each style.

---

## 📁 1. Default Export & Import

### ✅ What It Is:
Default export allows you to **export a single value or component** from a file. This is typically used when the file is centered around one main component.

### 📄 Example: `MyComponent.js`

```jsx
const MyComponent = () => {
  return <h2>Hello from MyComponent</h2>;
};

export default MyComponent;
```

### 📥 Importing It:
```jsx
import MyComponent from './components/MyComponent';

const App = () => (
  <div>
    <MyComponent />
  </div>
);

export default App;
```
> You can name the import whatever you want because it’s a default export.

## 📁 2. Named Export & Import

### ✅ What It Is:
Named exports let you **export multiple variables or components** from the same file. You must import them by their exact names.

### 📄 Example: `MyComponent.js`
```jsx
export const MyComponent = () => <h2>This is MyComponent</h2>;

export const AnotherComponent = () => <p>This is AnotherComponent</p>;
```

### 📥 Importing Them:
```jsx
import { MyComponent, AnotherComponent } from './components/components.js';

const App = () => (
  <div>
    <MyComponent />
    <AnotherComponent />
  </div>
);

export default App;
```

> Named exports require curly braces {} during import and must match the exported names exactly.

## 🔀 3. Mixing Default and Named Exports

You can use **both export** types in the same file.

### 📄 Example: `MyComponent.js`
```jsx
export const MyComponent = () => <h2>Named Component</h2>;

export const AnotherComponent = () => <p>Another Named Component</p>;

export default function MainComponent() {
  return <div>Main Default Component</div>;
}
```
### 📥 Importing:
```jsx
import MainComponent, { MyComponent, AnotherComponent } from './components/components.js';

const App = () => (
  <div>
    <MainComponent />
    <MyComponent />
    <AnotherComponent />
  </div>
);
```
> Here, MainComponent is the default export, and the others are named exports.

## 👥 4. Exporting Multiple Components from One File
Often used when grouping related UI parts (e.g., layout components like header, footer, main).

### 📄 Example: Layout.js

```jsx
export const Header = () => <header>Site Header</header>;

export const Footer = () => <footer>© 2025 Footer</footer>;

export default function MainContent() {
  return <main>Main Content Area</main>;
}
```

### 📥 Importing:

```jsx
import MainContent, { Header, Footer } from './components/Layout';

const App = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);
```
## ✅ When to Use Each Type

| Use Case                      | Export Type      |
| ----------------------------- | ---------------- |
| One main component per file   | `default export` |
| Multiple components/utilities | `named export`   |
| Combining both is needed      | both             |

## 🛠 Best Practices

- ### 🧩 Use default export for the main or single component in a file.

- ### 🧰 Use named exports for additional components or helper functions.

- ### 🧼 Be consistent across your project (e.g., use default for pages, named for UI elements).

- ### 🚫 Avoid exporting everything as default in large shared files — it reduces clarity.