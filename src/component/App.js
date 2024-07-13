import React, { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

const App = () => {
  const [items, setItems] = useState([]); //lift up state to parent component of Form and PackingList

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //mutate items is not allowed in react
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id)); //filter out wrong id
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
