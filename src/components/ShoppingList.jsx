import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

/**
 * ShoppingList Component
 * 
 * Component tree position:
 * App -> ShoppingList
 * 
 * States needed:
 * - items: list of shopping items (passed from App)
 * - selectedCategory: current category filter (default: "All")
 * - search: current search text (default: "")
 * 
 * This component manages the search and filter state, and passes
 * callbacks down to child components. The items state is managed
 * by the parent App component.
 */
function ShoppingList({ items, onItemFormSubmit }) {
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State for search text
  const [search, setSearch] = useState("");

  /**
   * Update category filter state when select changes
   */
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  /**
   * Update search text state when input changes
   */
  function handleSearchChange(searchValue) {
    setSearch(searchValue);
  }

  /**
   * Filter items based on category AND search text
   * - Category: matches selected category or "All"
   * - Search: case-insensitive partial match on item name
   */
  const itemsToDisplay = items.filter((item) => {
    // Filter by category
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    // Filter by search term
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="ShoppingList">
      {/* ItemForm receives onItemFormSubmit callback from App via ShoppingList */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      {/* Filter receives search state and callback from ShoppingList */}
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
