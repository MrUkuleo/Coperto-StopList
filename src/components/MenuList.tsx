import { useState } from "react";
import menuItems from "../data/menu.json";
import ProductCard from "./ProductCard";

export default function MenuList() {
  const [selected, setSelected] = useState<string[]>(["Все"]);

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
  const visibleProducts = menuItems.filter(
    (product) =>
      selected.includes("Все") || selected.includes(product.categorie)
  );

    return (
    <section className='panel'>
        <h2>МЕНЮ</h2>
        <div className="menu">
            <div className="search">
                <input placeholder="Поиск..."></input>
                <button id="search-btn">Q</button>
            </div>

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
            <hr></hr>
            <div className="cards-container">
              {visibleProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
        </div>
    </section>
    )
}