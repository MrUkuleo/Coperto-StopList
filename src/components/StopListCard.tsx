import { useState } from "react";
import "../styles/Menu.css";
import ConfirmingReturn from "./ConfirmingReturn";

type Product = {
  name: string;
  time: string;
  reason: string;
  comment: string;
};

export default function StopListCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="stoplist-card">
      <div className="stoplist-card-info">
        <h3>{product.name}</h3>
        <p>Добавлено в {product.time}</p>
        <p>Причина добавления: {product.reason}</p>
        <p>{product.comment}</p>
      </div>

      <button type="button" onClick={() => setIsModalOpen(true)}>
        Вернуть позицию в меню
      </button>

      {isModalOpen && (
        <ConfirmingReturn
          dishName={product.name}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}