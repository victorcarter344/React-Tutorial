# 🚗 React Forms – `<select>` Dropdowns
In regular HTML, dropdowns use the `selected` attribute to mark the default option:

## 📄 HTML Example:
```html 
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>
```

---

## ⚛️ In React
React handles `<select>` celements just like controlled inputs. Instead of using the `selected` attribute, you use the value prop on the `<select>` tag, and manage its value through `useState`.

---

## ✅ React Example:
```jsx
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [car, setCar] = useState("Volvo");

  function handleChange(e) {
    setCar(e.target.value);
  }

  return (
    <form>
      <label>Select your car:
        <select value={car} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <p>You selected: {car}</p>
    </form>
  );
}

createRoot(document.getElementById('root')).render(<MyForm />);
```

---

## 🔍 How This Works
- `useState("Volvo")` sets the default selected option.
- The dropdown’s value is linked to the `car` state.
- When the user selects a new option, `handleChange()` updates the state.
- React keeps the dropdown in sync with the state.

---

## 💡 Why Use Controlled `<select>`?
- You always know what the selected value is.
- It's easier to validate and process form data.
- You can programmatically change the selected option when needed.

---

## 🧪 Tip 
You can dynamically populate dropdown options from an array too:
```jsx
const cars = ["Ford", "Volvo", "Fiat"];
<select value={car} onChange={handleChange}>
  {cars.map((brand) => (
    <option key={brand} value={brand}>{brand}</option>
  ))}
</select>
```