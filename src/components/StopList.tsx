import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Menu.css";
import menuItems from "../data/menu.json";
import Search from "./Search";
import StopListCard from "./StopListCard";

type StopListItem = {
  name: string;
  reason: string;
  comment: string;
  time: string;
};

type RootStateShape = {
  stopList: { items: StopListItem[] };
};

export default function StopList() {
  const items = useSelector((state: RootStateShape) => state.stopList.items);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalMenuItems = menuItems.length;

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section className="panel">
      <h2>СТОП-ЛИСТ</h2>
      <div className="menu">
        <Search value={searchQuery} onChange={setSearchQuery} />

        <h3 id="stoplist-items-count">
          {items.length === 0
            ? "Все позиции в продаже"
            : `В стоп-листе: ${items.length}/${totalMenuItems}`}
        </h3>

        <hr />
        <div className="stoplist-cards-container">
          {items.length > 0 && visibleItems.length === 0 ? (
              <p>Ничего не найдено</p>
            ) : (
              visibleItems.map((product) => (
                <StopListCard key={product.name} product={product} />
              ))
        )}
        </div>
      </div>
    </section>
  );
}