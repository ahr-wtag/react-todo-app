import React from "react";
import style from "./index.module.scss";

const TaskCard = ({ todo }) => {
  const { task, created } = todo;
  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>Created:{created}</p>
    </div>
  );
};

export default TaskCard;
