# Multiple Controlled Components
When you have multiple text inputs in a React form, you can manage them in two main ways:

## ✅ Option 1: Use a Separate State Variable for Each Input
This is simple and works well for small forms.

### Example:
```jsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Full Name: ${firstName} ${lastName}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text" 
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input 
          type="text" 
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

createRoot(document.getElementById('root')).render(<MyForm />);
```

## ✅ Option 2: Use a Single State Object for All Inputs
This is cleaner for larger forms.
### 📌 Example:
```jsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${formData.firstName} ${formData.lastName}, Email: ${formData.email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text" 
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input 
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

createRoot(document.getElementById('root')).render(<MyForm />);
```

| Approach                | Best For     | Pros                       | Cons                        |
| ----------------------- | ------------ | -------------------------- | --------------------------- |
| **Separate States**     | Small forms  | Easy to read               | Can get repetitive          |
| **Single State Object** | Larger forms | Scalable, reusable handler | Slightly more complex logic |


---