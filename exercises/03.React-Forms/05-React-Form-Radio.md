# 🔘 React Forms: Radio Button
This guide walks through building a simple form using radio buttons in React, where users can choose one item from a list of options.

---

## 🎯 Purpose of Radio Buttons
Radio buttons are great for questions where only one option should be selected—like choosing a favorite fruit. All radio buttons in the same group must share the same `name` attribute to ensure mutual exclusivity.

---

## 💡 How It Works
React uses the `checked` attribute to determine which radio button is selected. You compare the `value` of each button with the current state value to control its selection.

---

## 🧪 Example: Favorite Fruit Form
This example asks users to pick their favorite fruit from a list of three options. The selection is managed with React's `useState` hook.

## 📦 Complete Code
```jsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your favorite fruit is: ${selectedFruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>

      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        />
        Apple
      </label>
      <br />

      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        />
        Banana
      </label>
      <br />

      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        />
        Cherry
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(<MyForm />);
```

---

## 🧠 What to Remember
- **✅ Radio Grouping**: All radio buttons in a group must have the same name (e.g., "fruit").
- **🔁 Controlled Input**: Use checked={state === value} to manage the selected radio option.
- **🧩 Single State Variable**: Keep track of the selected option using useState.

---

## 📚 Summary
Using radio buttons in React is straightforward:
- Use a single state variable to track the selected value.
- Use `checked` to bind each radio input to the state.
- Use the `name` attribute consistently to group radio buttons.
With this approach, you can build clean, accessible forms that allow users to make single-option choices.

With this approach, you can build clean, accessible forms that allow users to make single-option choices.

---