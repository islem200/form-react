import React from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "TV",
  },

  {
    id: 2,
    name: "Phone",
  },

  {
    id: 3,
    name: "Laptop",
  },
];
const App = () => {
  const [items, setItems] = useState(data);

  const clearAll = () => {
    setItems([]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item)=>item.id!==id));

  };

  return (
    <div>
      <Navbar count={items.length}/>
      <CartList onRemove={removeItem} onClear={clearAll} items={items} />
      
    </div>
  );
};

export default App;
