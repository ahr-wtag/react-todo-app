import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask, searchTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import {
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  FILTER_STATE_ALL,
  NOTIFICATION_MESSAGE_EMPTY_TASK,
  NOTIFICATION_MESSAGE_ADD_TASK,
} from "utils/constant";
import { sanitizeText } from "utils/helpers/sanitizeText";
import { showErrorToast, showSuccessToast } from "utils/notification";
import { NOTIFICATION_MESSAGE_PROCESSING_ERROR } from "utils/constant/notification";

const AddTaskCard = ({
  onSearchBarVisible,
  isCardCreated,
  onCreateCard,
  setFilter,
}) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  function handleInputText(event) {
    setInputText(event.target.value);
  }

  function handleAddTask() {
    const task = sanitizeText(inputText);

    if (task === "") {
      showErrorToast(NOTIFICATION_MESSAGE_EMPTY_TASK);

      return;
    }

    onCreateCard(!isCardCreated);

    dispatch(addTask({ task }));
    dispatch(searchTask(""));
    onSearchBarVisible(false);
    setInputText(null);
    setFilter(FILTER_STATE_ALL);
    showSuccessToast(NOTIFICATION_MESSAGE_ADD_TASK);
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      handleAddTask();
    }
  }

  function handleDeleteTask() {
    onCreateCard(!isCardCreated);
    showErrorToast(NOTIFICATION_MESSAGE_PROCESSING_ERROR);
  }

  return (
    <div className={style.container}>
      <textarea
        name="task"
        id="task"
        onChange={handleInputText}
        value={inputText}
        autoFocus
        onKeyDown={storeTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <div className={style.action__button__container}>
        <button className={style.button} onClick={handleAddTask}>
          Add Task
        </button>
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  );
};

AddTaskCard.propTypes = {
  isCardCreated: PropTypes.bool.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  onSearchBarVisible: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default AddTaskCard;
