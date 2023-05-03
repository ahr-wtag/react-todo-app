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
  NOTIFICATION_MESSAGE_EMPTY_TASK,
  NOTIFICATION_MESSAGE_COMPLETE_TASK,
  NOTIFICATION_MESSAGE_UPDATE_TASK,
} from "utils/constant";
import { showErrorToast, showSuccessToast } from "utils/notification";
import { NOTIFICATION_MESSAGE_PROCESSING_ERROR } from "utils/constant/notification";

const EditTaskCard = ({ id, task, onEditableTask }) => {
  const [inputText, setInputText] = useState(task);
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const storeTask = (sanitizedTask) => {
    onEditableTask(null);
    dispatch(
      editTask({
        id,
        task: sanitizedTask,
      })
    );

    setInputText(null);
  };

  const handleSaveClick = () => {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);

      return;
    }
    storeTask(sanitizedTask);
    showSuccessToast(NOTIFICATION_MESSAGE_UPDATE_TASK);
  };

  const handleDeleteClick = () => {
    onEditableTask(null);
    showErrorToast(NOTIFICATION_MESSAGE_PROCESSING_ERROR);
  };

  const handleCompleteClick = () => {
    const sanitizedTask = sanitizeText(inputText);
    if (sanitizedTask === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);

      return;
    }
    storeTask(sanitizedTask);
    showSuccessToast(NOTIFICATION_MESSAGE_COMPLETE_TASK);
    dispatch(completeTask(id));
  };

  const storeTaskOnEnter = (e) => {
    if (e.key === KEY_ENTER) {
      e.preventDefault();
      handleSaveClick();
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
      <div className={style.bottomBar}>
        <div className={style.actionButtonContainer}>
          <div>
            <button className={style.button} onClick={handleSaveClick}>
              save
            </button>
          </div>
          <img
            src={ICON_COMPLETE}
            alt={COMPLETE_ICON_ALT_TEXT}
            onClick={handleCompleteClick}
          />
          <img
            src={ICON_DELETE}
            alt={DELETE_ICON_ALT_TEXT}
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

EditTaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  onEditableTask: PropTypes.func.isRequired,
};

export default EditTaskCard;
