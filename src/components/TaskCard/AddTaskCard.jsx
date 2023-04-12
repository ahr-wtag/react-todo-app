import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { sanitizeText } from "utils/helpers/sanitizeText.js";
import PropTypes from "prop-types";
import { addTask } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { ENTER } from "utils/constant";
const AddTaskCard = ({ createButtonState, setCreateButtonState }) => {
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
    setCreateButtonState(!createButtonState);

    dispatch(
      addTask({
        id: uuidv1(),
        task,
        createdTime: new Date(),
        completed: false,
      })
    );
    setInputText(null);
  };
  const storeTaskOnEnter = (e) => {
    if (e.key === ENTER) {
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
      <>
        <button onClick={storeTask}>Add Task</button>
      </>
    </div>
  );
};
AddTaskCard.propTypes = {
  createButtonState: PropTypes.bool.isRequired,
  setCreateButtonState: PropTypes.func.isRequired,
};
export default AddTaskCard;
