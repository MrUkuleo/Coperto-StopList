import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToStopList } from "../store/Stoplistslice";
import "../styles/Modal.css";

type AddFormProps = {
  onClose: () => void;
  dishName: string;
};

export default function AddForm({ onClose, dishName }: AddFormProps) {
  const dispatch = useDispatch();

  const [reason, setReason] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleAddClick() {
    const trimmedComment = comment.trim();
    const trimmedTime = time.trim();

    if (trimmedTime === "" || reason === "") {
      setError("Заполните все обязательные поля!");
      return;
    }

    if (reason === "other" && trimmedComment === "") {
      setError("Укажите комментарий!");
      return;
    }

    setError("");

    dispatch(
      addToStopList({
        name: dishName,
        reason,
        comment: trimmedComment,
        time: trimmedTime,
      })
    );

    onClose();
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h3>Добавление в стоп-лист</h3>
        <h5>Добавляемое блюдо: {dishName}</h5>
        <form>
          <div className="reason">
            <label>Причина: </label>

            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              id="select-reason"
            >
              <option value="" disabled hidden></option>
              <option value="outOfProducts">Закончились продукты</option>
              <option value="poorQuality">Плохое качество партии</option>
              <option value="noCook">Нет повара на позиции</option>
              <option value="other">Другое...</option>
            </select>
          </div>

          <div className="comment">
            <label>Комментарий: </label>
            <textarea
              id="comment-section"
              maxLength={200}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                borderColor:
                  error && reason === "other" && comment.trim() === ""
                    ? "red"
                    : "grey",
              }}
            ></textarea>
          </div>

          <div className="time">
            <label>Время возврата: </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <p id="show-error">{error}</p>

          <div className="btns">
            <button type="button" id="add-btn" onClick={handleAddClick}>
              Добавить
            </button>

            <button type="button" id="cancel-btn" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
