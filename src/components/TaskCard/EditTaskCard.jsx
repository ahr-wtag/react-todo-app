import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { editTask, completeTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import {
  ICON_COMPLETE,
  COMPLETE_ICON_ALT_TEXT,
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
} from "utils/constant";
const EditTaskCard = ({ id, task, setEditableTask }) => {
  const [inputText, setInputText] = useState(task);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSaveButtonClick = () => {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      setError("Please add task description");

      return;
    }

    setEditableTask(null);
    dispatch(
      editTask({
        id,
        task: sanitizedTask,
      })
    );

    setInputText(null);
  };

  const handleDeleteButtonClick = () => {
    setEditableTask(null);
  };

  const handleCompleteButtonClick = () => {
    handleSaveButtonClick();

    dispatch(completeTask(id));
  };

  const storeTaskOnEnter = (e) => {
    if (e.key === KEY_ENTER) {
      e.preventDefault();
      handleSaveButtonClick();
    }
  };

  const sendCursorToEnd = (e) => {
    const inputElement = e.target;
    inputElement.setSelectionRange(
      inputElement.value.length,
      inputElement.value.length
    );
  };

  return (
    <div className={style.container}>
      <textarea
        name="task"
        id="task"
        onChange={handleInputText}
        value={inputText}
        autoFocus
        onFocus={sendCursorToEnd}
        onKeyDown={storeTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <small className={style.error}>{error && error}</small>

      <div className={style.actionButtonContainer}>
        <div>
          <button className={style.button} onClick={handleSaveButtonClick}>
            save
          </button>
        </div>
        <img
          src={ICON_COMPLETE}
          alt={COMPLETE_ICON_ALT_TEXT}
          onClick={handleCompleteButtonClick}
        />
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteButtonClick}
        />
      </div>
    </div>
  );
};

EditTaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  setEditableTask: PropTypes.func.isRequired,
};

export default EditTaskCard;
