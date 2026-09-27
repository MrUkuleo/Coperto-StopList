import { useSelector } from "react-redux";
import menuItems from "../data/menu.json";
import "../styles/Menu.css";
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

  return (
    <section className="panel">
      <h2>СТОП-ЛИСТ</h2>
      <div className="menu">
        <Search />
        <h3 id="stoplist-items-count">
          {items.length === 0
            ? "Все позиции в продаже"
            : `В стоп-листе: ${items.length}/${menuItems.length}`}
        </h3>

        <hr />
        <div className="stoplist-cards-container">
          {items.map((product) => (
            <StopListCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}