import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { addTask, searchTask } from "store/actions/";
import "components/TaskCard/index.scss";
import {
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  FILTER_STATE_ALL,
  NOTIFICATION_MESSAGE_EMPTY_TASK,
  NOTIFICATION_MESSAGE_ADD_TASK,
  NOTIFICATION_MESSAGE_PROCESSING_ERROR,
} from "utils/constant";
import { showErrorToast, showSuccessToast } from "utils/notification";

const AddTaskCard = ({
  isCardCreated,
  onSearchBarVisible,
  onCreateCard,
  onFilterState,
}) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function onSave() {
    const task = sanitizeText(inputText);

    if (task === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);
      return;
    }

    onCreateCard(!isCardCreated);
    dispatch(addTask({ task }));
    dispatch(searchTask(""));
    onSearchBarVisible(false);
    setInputText("");
    onFilterState(FILTER_STATE_ALL);
    showSuccessToast(NOTIFICATION_MESSAGE_ADD_TASK);
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      onSave();
    }
  }

  function handleDeleteTask() {
    onCreateCard(!isCardCreated);
    showErrorToast(NOTIFICATION_MESSAGE_PROCESSING_ERROR);
  }

  return (
    <div className="task-card">
      <textarea
        name="task"
        id="task"
        onChange={handleInputChange}
        value={inputText}
        autoFocus
        onKeyDown={storeTaskOnEnter}
        className="task-card__textarea"
      ></textarea>
      <div className="task-card__bottom-bar">
        <div className="task-card__action-button-container">
          <button className="task-card__button" onClick={onSave}>
            Add Task
          </button>
          <img
            src={ICON_DELETE}
            alt={DELETE_ICON_ALT_TEXT}
            onClick={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  isCardCreated: PropTypes.bool.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onSearchBarVisible: PropTypes.func.isRequired,
  onFilterState: PropTypes.func.isRequired,
};

export default AddTaskCard;
