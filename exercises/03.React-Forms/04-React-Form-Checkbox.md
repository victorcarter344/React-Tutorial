# 📝 React Forms: Checkbox
This example demonstrates how to build a simple form in React using checkboxes and text input. It also shows how to manage form state using the `useState` hook.

---

## 📌 Key Concepts
- Use `checked` (instead of `value`) for checkbox inputs.
- Use a single `handleChange` function to manage multiple form elements.
- Store all form values in a single state object.
- Use `e.target.type` to distinguish between checkboxes and other input types.

---

## 🚀 Quick Example
Here’s a working example of a burger order form:

### ✅ Features
- A text input for the user's name.
- Two checkboxes: Tomato and Onion.
- A submit button that shows an alert with the user's name and selected fillings.

### 📦 Full Code
```jsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setInputs(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let fillings = [];
    if (inputs.tomato) fillings.push('tomato');
    if (inputs.onion) fillings.push('onion');

    const fillingsText = fillings.length > 0 ? fillings.join(' and ') : 'no fillings';

    alert(`${inputs.firstname} wants a burger with ${fillingsText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        My name is:
        <input 
          type="text" 
          name="firstname" 
          value={inputs.firstname} 
          onChange={handleChange} 
        />
      </label>

      <p>I want a burger with:</p>
      
      <label>
        Tomato:
        <input 
          type="checkbox" 
          name="tomato" 
          checked={inputs.tomato} 
          onChange={handleChange} 
        />
      </label>

      <label>
        Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange} 
        />
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(<MyForm />);
```

---

## 🛠️ Notes
- ✅ **Checkboxes:** Use `checked` prop to control checkbox state in React.
- 🧠 **Generic Change Handler:** Use `e.target.type` to switch between `value` and `checked` based on input type.
- 🧱 **Initial Values:** You can set default form values by initializing the state with predefined values.

---

## 📚 Summary
React forms become cleaner and more scalable when you:

- Use a single state object for all fields.
- Write one `handleChange` function that handles both text and checkbox inputs.
- Control checkboxes using the `checked` attribute.

---