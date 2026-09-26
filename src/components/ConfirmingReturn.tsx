import "../styles/Modal.css";

type ConfirmingReturnProps = {
  onClose: () => void;
  dishName: string;
};

export default function ConfirmingReturn({
  onClose,
  dishName,
}: ConfirmingReturnProps) {
  function handleConfirm() {
    alert(`Позиция «${dishName}» возвращена в меню!`);
    onClose();
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h3>Вернуть позицию «{dishName}» в меню?</h3>

        <div className="btns">
          <button type="button" id="yes-btn" onClick={handleConfirm}>
            Да
          </button>
          <button type="button" id="no-btn" onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}