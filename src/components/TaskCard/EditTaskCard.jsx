import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { editTask, completeTask } from "store/actions/";
import "components/TaskCard/index.scss";
import {
  ICON_COMPLETE,
  COMPLETE_ICON_ALT_TEXT,
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  NOTIFICATION_MESSAGE_EMPTY_TASK,
  NOTIFICATION_MESSAGE_COMPLETE_TASK,
  NOTIFICATION_MESSAGE_UPDATE_TASK,
  NOTIFICATION_MESSAGE_PROCESSING_ERROR,
} from "utils/constant";
import { showErrorToast, showSuccessToast } from "utils/notification";

const EditTaskCard = ({ id, task, onEditableTasks }) => {
  const [inputText, setInputText] = useState(task);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function storeTask(sanitizedTask) {
    onEditableTasks(false);
    dispatch(
      editTask({
        id,
        task: sanitizedTask,
      })
    );

    setInputText(null);
  }

  function onSave() {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);

      return;
    }
    storeTask(sanitizedTask);
    showSuccessToast(NOTIFICATION_MESSAGE_UPDATE_TASK);
  }

  function handleDeleteTask() {
    onEditableTasks(false);
    showErrorToast(NOTIFICATION_MESSAGE_PROCESSING_ERROR);
  }

  function handleCompleteTask() {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);

      return;
    }
    storeTask(sanitizedTask);
    showSuccessToast(NOTIFICATION_MESSAGE_COMPLETE_TASK);
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
