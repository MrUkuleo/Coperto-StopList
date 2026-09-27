import { useState } from "react";
import { useSelector } from "react-redux";
import menuItems from "../data/menu.json";
import ProductCard from "./ProductCard";
import Search from "./Search";

// Так как store.js написан на чистом JS, у него нет типа RootState.
// Поэтому здесь состояние стоп-листа типизируется вручную —
// этого достаточно, чтобы TypeScript понимал форму данных.
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

  // Читаем текущий стоп-лист из Redux-хранилища.
  // useSelector "подписывает" компонент на нужную часть состояния:
  // при любом изменении state.stopList.items MenuList перерисуется.
  const stopListItems = useSelector(
    (state: RootStateShape) => state.stopList.items
  );

  // Из объектов стоп-листа нам нужны только имена блюд —
  // именно по имени мы будем скрывать карточку из меню.
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

  // Приводим поисковый запрос к нижнему регистру один раз,
  // чтобы поиск не зависел от регистра букв (Борщ === борщ === БОРЩ).
  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Блюдо показывается в меню, если:
  // 1) оно подходит под выбранную категорию (как и раньше),
  // 2) его имени нет среди блюд, добавленных в стоп-лист, И
  // 3) его название содержит поисковый запрос (без учёта регистра).
  // Поиск таким образом всегда работает "внутри" уже выбранной
  // категории — сначала фильтруем по категории, потом по тексту.
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