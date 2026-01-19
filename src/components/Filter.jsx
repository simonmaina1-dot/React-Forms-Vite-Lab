import React from "react";

/**
 * Filter Component
 * 
 * Component tree position:
 * App -> ShoppingList -> Filter
 * 
 * States needed:
 * - search: holds the current search text (managed by ShoppingList parent)
 * 
 * This component receives search state as a prop (controlled component pattern)
 * and calls onSearchChange callback when the input changes.
 */
function Filter({ onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      {/* 
        Controlled search input:
        - value is synced with state from parent (ShoppingList)
        - onChange calls the callback to update state 
      */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
