import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

/**
 * App Component (Root Component)
 * 
 * Component tree:
 * App
 * ├── Header
 * └── ShoppingList
 *     ├── ItemForm
 *     ├── Filter
 *     └── Item
 * 
 * States managed at this level:
 * - items: list of all shopping items (initialized from data file)
 * - isDarkMode: dark/light theme toggle
 * 
 * This component is the single source of truth for the items list.
 * It passes the onItemFormSubmit callback down through ShoppingList
 * to ItemForm, allowing new items to be added to the list.
 */
function App() {
  // Items state - holds all shopping list items
  const [items, setItems] = useState(itemData);
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Toggle between dark and light theme
   */
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  /**
   * Add a new item to the shopping list
   * Uses spread operator to create a new array (immutable update)
   */
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* Pass onItemFormSubmit callback to ShoppingList */}
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
