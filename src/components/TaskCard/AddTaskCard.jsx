import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { sanatizeText } from "utils/helpers/sanatizeText.js";
import { addTask, createButton } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { ENTER } from "utils/constant/form";
import { DELETE, DELETE_ALT } from "utils/constant/images";
const AddTaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const storeTask = () => {
    const task = sanatizeText(inputText);
    if (task === "") {
      setError("Please add task description");
      return;
    }
    dispatch(createButton());

    dispatch(
      addTask({
        id: uuidv1(),
        task,
        createdTime: new Date().toLocaleDateString("de-DE"),
        completed: false,
      })
    );
    setInputText("");
  };

  const cancelAction = () => {
    dispatch(createButton());
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
      <small>{error && error}</small>

      <div className={style.actionContainer}>
        <div>
          <button className="btn" onClick={storeTask}>
            Add Task
          </button>
        </div>
        <img src={DELETE} alt={DELETE_ALT} onClick={cancelAction} />
      </div>
    </div>
  );
};

export default AddTaskCard;
