import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { editTask, completeTask } from "store/actions/";
import "components/TaskCard/index.scss";
import { ICON_DELETE, DELETE_ICON_ALT_TEXT, KEY_ENTER } from "utils/constant";
import { ICON_COMPLETE, COMPLETE_ICON_ALT_TEXT } from "utils/constant/images";

const EditTaskCard = ({ id, task, onEditableTasks }) => {
  const [inputText, setInputText] = useState(task);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function onSave() {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      setError("Please add task description");

      return;
    }

    onEditableTasks(false);
    dispatch(
      editTask({
        id,
        task: sanitizedTask,
      })
    );

    setInputText(null);
  }

  function handleDeleteTask() {
    onEditableTasks(false);
  }

  function handleCompleteTask() {
    onSave();

    dispatch(completeTask(id));
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      onSave();
    }
  }

  function sendCursorToEnd(event) {
    const inputElement = event.target;
    const { length } = inputElement.value;
    inputElement.setSelectionRange(length, length);
  }

  return (
    <div className="task-card">
      <textarea
        name="task"
        id="task"
        onChange={handleInputChange}
        value={inputText}
        autoFocus
        onFocus={sendCursorToEnd}
        onKeyDown={storeTaskOnEnter}
        className="task-card__textarea"
      ></textarea>
      <small className="task-card__error">{error && error}</small>

      <div className="task-card__action-button-container">
        <div>
          <button className="task-card__button" onClick={onSave}>
            save
          </button>
        </div>
        <img
          src={ICON_COMPLETE}
          alt={COMPLETE_ICON_ALT_TEXT}
          onClick={handleCompleteTask}
        />
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  );
};

EditTaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  onEditableTasks: PropTypes.func.isRequired,
};

export default EditTaskCard;
