import React, { useState } from 'react';
import './App.css';

function App() {
 
  const [items, setItems] = useState([]);
  
  const [input, setInput] = useState('');

 
  const addItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput(''); 
    }
  };

  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
