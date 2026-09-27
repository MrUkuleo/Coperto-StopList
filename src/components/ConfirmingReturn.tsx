import "../styles/Modal.css";

type ConfirmingReturnProps = {
  onClose: () => void;
  onConfirm: () => void;
  dishName: string;
};

export default function ConfirmingReturn({
  onClose,
  onConfirm,
  dishName,
}: ConfirmingReturnProps) {
  function handleConfirm() {
    onConfirm();
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