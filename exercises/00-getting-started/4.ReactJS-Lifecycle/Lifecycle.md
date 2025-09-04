# 🔄 ReactJS Component Lifecycle

React class components follow a lifecycle, which defines how components are initialized, rendered, updated, and destroyed. Understanding each phase helps in writing predictable and efficient components.

## 🧱 1. Initialization
This is the phase where the component is constructed with the given props and the initial state. It usually happens inside the constructor() method.
- **constructor(props)**
    - Initializes the component.
    - Sets up default state.
    - Binds event handlers.

## 🚀 2. Mounting Phase
This phase occurs when the component is inserted into the DOM for the first time.
- constructor()
    - Initializes state and binds methods.
- render()
    - Returns the JSX to render UI.
    - Pure and synchronous.
- componentDidMount()
    - Called once after the component is mounted.
    - Perfect place for side effects: data fetching, subscriptions, DOM interactions.

## 🔁 3. Updating Phase
This phase is triggered when the component's state or props change.

- shouldComponentUpdate(nextProps, nextState)
    - Controls whether the component should re-render.
    - Used for performance optimization.
- render()
    - Re-renders the component with updated data.
- componentDidUpdate(prevProps, prevState)
    - Invoked after updates are flushed to the DOM.
    - Useful for handling side effects in response to prop/state changes.
## ❌ 4. Unmounting Phase

This is the final phase in the component lifecycle, where the component is removed from the DOM.
- componentWillUnmount()
    - Called just before the component is destroyed.
    - Cleanup logic goes here (e.g., removing event listeners, clearing timers).