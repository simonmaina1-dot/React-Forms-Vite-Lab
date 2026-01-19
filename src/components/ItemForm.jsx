import React, { useState } from "react";
import { v4 as uuid } from "uuid";

/**
 * ItemForm Component
 * 
 * Component tree position:
 * App -> ShoppingList -> ItemForm
 * 
 * States needed (managed locally):
 * - name: holds the current name input value
 * - category: holds the current category selection (default: "Produce")
 * 
 * This component manages its own form state (controlled inputs)
 * and calls onItemFormSubmit callback when the form is submitted.
 */
function ItemForm({ onItemFormSubmit }) {
  // State for form inputs - initialized with empty string and "Produce"
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  /**
   * Handle form submission
   * Creates a new item object using current state values
   * and calls the parent's callback to add it to the list
   */
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    const newItem = {
      id: uuid(), // Generate unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
    // Reset form after submission
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        {/* Controlled input - value synced with state */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        {/* Controlled select - value synced with state */}
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
