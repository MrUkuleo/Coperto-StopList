import { useState } from "react";
import { useSelector } from "react-redux";
import menuItems from "../data/menu.json";
import ProductCard from "./ProductCard";
import Search from "./Search";

type StopListItem = {
  name: string;
  reason: string;
  comment: string;
  time: string;
};

type RootStateShape = {
  stopList: { items: StopListItem[] };
};

export default function MenuList() {
  const [selected, setSelected] = useState<string[]>(["Все"]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const stopListItems = useSelector(
    (state: RootStateShape) => state.stopList.items
  );

  const hiddenNames = stopListItems.map((item) => item.name);

  function handleCategoryChange(category: string) {
    setSelected((current) => {
      if (category === "Все") return ["Все"];

      const next = current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current.filter((item) => item !== "Все"), category];

      return next.length === 0 ? ["Все"] : next;
    });
  }

  const categories = ["Кухня", "Бар", "Десерты"];

  
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleProducts = menuItems.filter(
    (product) =>
      (selected.includes("Все") || selected.includes(product.categorie)) &&
      !hiddenNames.includes(product.name) &&
      product.name.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section className="panel">
      <h2>МЕНЮ</h2>
      <div className="menu">
        <Search value={searchQuery} onChange={setSearchQuery} />
        <div className="categories">
          <h4>Категории:</h4>
          <ul>
            <li>
              <input
                type="checkbox"
                id="all"
                checked={selected.includes("Все")}
                onChange={() => handleCategoryChange("Все")}
              />
              <label htmlFor="all">Все</label>
            </li>

            {categories.map((category) => (
              <li key={category}>
                <input
                  type="checkbox"
                  id={category}
                  checked={selected.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="cards-container">
          {visibleProducts.length === 0 ? (
            <p>Ничего не найдено</p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}