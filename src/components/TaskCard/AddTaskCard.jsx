import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import { addTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { KEY_ENTER } from "utils/constant";

const AddTaskCard = ({ isCardCreated, onCreateCard }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const storeTask = () => {
    const task = sanitizeText(inputText);

    if (task === "") {
      setError("Please add task description");

      return;
    }

    onCreateCard(!isCardCreated);

    dispatch(addTask({ task }));

    setInputText(null);
  };

  const storeTaskOnEnter = (e) => {
    if (e.key === KEY_ENTER) {
      e.preventDefault();
      storeTask();
    }
  };

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
      <small className={style.error}>{error && error}</small>
      <button onClick={storeTask}>Add Task</button>
    </div>
  );
};

AddTaskCard.propTypes = {
  isCardCreated: PropTypes.bool.isRequired,
  onCreateCard: PropTypes.func.isRequired,
};

export default AddTaskCard;
