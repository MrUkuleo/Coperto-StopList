import "../styles/Modal.css"

type AddFormProps = {
  onClose: () => void
}

function onAddBtnClicked() {
  const ShowError = document.getElementById("show-error") as HTMLParagraphElement;
  const CommentSection = document.getElementById("comment-section") as HTMLTextAreaElement;
  const SelectReason = document.getElementById("select-reason") as HTMLSelectElement;
  const TimeInput = document.getElementById("time") as HTMLInputElement;

  const reason = SelectReason.value;
  const comment = CommentSection.value.trim();
  const time = TimeInput.value.trim();

  if (
    time === "" ||
    reason === "") 
  {
    ShowError.textContent = "Заполните все обязательные поля!";
    return;
  }
  else if (reason === "other" && comment === "")
  {
    ShowError.textContent = "Укажите комментарий!";
    CommentSection.style.borderColor = "red";
    return;
  }

  CommentSection.style.borderColor = "grey";
  ShowError.textContent = "";
  alert("Ыыыаыа");
 
}


export default function AddForm({ onClose }: AddFormProps)
{
  return (
    <div className="overlay">
      <div className="modal">
        <h3>Добавление в стоп-лист</h3>
        <h5>Добавляемое блюдо: ЗАГЛУШКА С ЗАГЛУШКОЙ</h5>
        <form>
          <div className="reason">
            <label>Причина: </label>

            <select defaultValue="" id="select-reason">
              <option value="" disabled hidden></option>
              <option value="outOfProducts">Закончились продукты</option>
              <option value="poorQuality">Плохое качество партии</option>
              <option value="noCook">Нет повара на позиции</option>
              <option value="other">Другое...</option>
            </select>
          </div>

          <div className="comment">
            <label>Комментарий: </label>
            <textarea id="comment-section"></textarea>
          </div>

          <div className="time">
            <label>Время возврата: </label>
            <input type="time" id="time"/>
          </div>

          <p id="show-error"></p>

          <div className="btns">
            <button type="button" id="add-btn" onClick={onAddBtnClicked}>
              Добавить
            </button>

            <button type="button" id="cancel-btn" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
