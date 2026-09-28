import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToStopList } from "../store/Stoplistslice";
import "../styles/Modal.css";

type AddFormProps = {
  onClose: () => void;
  dishName: string;
};

type Errors = {
  reason?: string;
  comment?: string;
  time?: string;
};

export default function AddForm({ onClose, dishName }: AddFormProps) {
  const dispatch = useDispatch();

  const [reason, setReason] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  function clearError(field: keyof Errors) {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }

  function handleAddClick() {
    const trimmedComment = comment.trim();
    const trimmedTime = time.trim();

    const newErrors: Errors = {};

    if (reason === "") 
    {
      newErrors.reason = "Выберите причину!";
    }

    if (reason === "other" && trimmedComment === "") 
    {
      newErrors.comment = "Добавьте комментарий!";
    } 
    else if (reason === "other" && trimmedComment.length < 10) 
    {
      newErrors.comment = "Комментарий должен быть не менее 10 символов!";
    }

    if (trimmedTime === "") 
    {
      newErrors.time = "Укажите время возврата!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
              onChange={(e) => {
                setReason(e.target.value);
                clearError("reason");
              }}
              className={errors.reason ? "error-field" : ""}
              style={{ borderColor: errors.reason ? "red" : "" }}
            >
              <option value="" disabled hidden></option>
              <option value="outOfProducts">Закончились продукты</option>
              <option value="poorQuality">Плохое качество партии</option>
              <option value="noCook">Нет повара на позиции</option>
              <option value="other">Другое...</option>
            </select>
          </div>

          {errors.reason && (
            <p className="show-error">{errors.reason}</p>
          )}


          <div className="comment">
            <label>Комментарий: </label>

            <textarea
              maxLength={200}
              minLength={reason === "other" ? 10 : 0}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                clearError("comment");
              }}
              className={errors.comment ? "error-field" : ""}
              style={{ borderColor: errors.comment ? "red" : "" }}
            />
          </div>

          {errors.comment && (
            <p className="show-error">{errors.comment}</p>
          )}


          <div className="time">
            <label>Время возврата: </label>

            <input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                clearError("time");
              }}
              className={errors.time ? "error-field" : ""}
              style={{ borderColor: errors.time ? "red" : "" }}
            />
          </div>

            {errors.time && (
              <p className="show-error">{errors.time}</p>
            )}


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