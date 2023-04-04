import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { sanatizeText } from "utils/helpers/sanatizeText.js";
import { addTask, createButton } from "store/actions/";
import style from "components/TaskCard/index.module.scss";
import { ENTER } from "utils/constant/form";
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
        created: new Date().toLocaleDateString("de-DE"),
        completed: false,
      })
    );
    setInputText("");
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
      <br />
      <button onClick={storeTask}>Add Task</button>
    </div>
  );
};

export default AddTaskCard;
