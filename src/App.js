/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";

import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";
import logo from "./images/logo.jpg";

const allCategories = [...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    // On component mount, filter items by the first category
    filterItems(allCategories[0]);
  }, []);

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === undefined) {
      setMenuItems(allCategories[0]);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title"></div>
        <img src={logo} alt="logo" className="logo" />
        <h2>Menu List</h2>
        <div className="underline"></div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
