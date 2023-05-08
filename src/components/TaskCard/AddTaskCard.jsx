import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { addTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import {
  ICON_DELETE,
  DELETE_ICON_ALT_TEXT,
  KEY_ENTER,
  FILTER_STATE_ALL,
} from "utils/constant";

const AddTaskCard = ({ isCardCreated, onCreateCard, setFilter }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleAddTask() {
    const task = sanitizeText(inputText);

    if (task === "") {
      setError("Please add task description");

      return;
    }

    onCreateCard(!isCardCreated);

    dispatch(addTask({ task }));

    setInputText(null);
    setFilter(FILTER_STATE_ALL);
  }

  function storeTaskOnEnter(event) {
    if (event.key === KEY_ENTER) {
      event.preventDefault();
      handleAddTask();
    }
  }

  function handleDeleteTask() {
    onCreateCard(!isCardCreated);
  }

  return (
    <div className={style.container}>
      <textarea
        name="task"
        id="task"
        onChange={handleInputChange}
        value={inputText}
        autoFocus
        onKeyDown={storeTaskOnEnter}
        className={style.textarea}
      ></textarea>
      <small className={style.error}>{error && error}</small>

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
  setFilter: PropTypes.func.isRequired,
};

export default AddTaskCard;
