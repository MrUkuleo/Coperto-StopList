import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Menu.css";
import ConfirmingReturn from "./ConfirmingReturn";
import {returnToMenu} from "../store/Stoplistslice";

type Product = {
  name: string;
  time: string;
  reason: string;
  comment: string;
};

export default function StopListCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function handleConfirmReturn() {
    dispatch(returnToMenu(product.name));
  }

  let reasonText:string = "";

  switch (product.reason) {
    case "outOfProducts":
      reasonText = "Закончились продукты";
      break;
    case "poorQuality":
      reasonText = "Плохое качество партии";
      break;
    case "noCook":
      reasonText = "Нет повара на позиции";
      break;
    case "other":
      reasonText = "Другое";
      break;
  }

  return (
    <div className="stoplist-card">
      <div className="stoplist-card-info">
        <h3>{product.name}</h3>
        <p>Добавлено в {product.time}</p>
        <p>Причина добавления: {reasonText}</p>
        <p className="stoplist-card-comment">{product.comment}</p>
      </div>

      <button type="button" onClick={() => setIsModalOpen(true)}>
        Вернуть позицию в меню
      </button>

      {isModalOpen && (
        <ConfirmingReturn
          dishName={product.name}
          onConfirm={handleConfirmReturn}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}