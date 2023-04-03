import React from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "../TaskCard/AddTaskCard";
import TaskCard from "../TaskCard";
import style from "./index.module.scss";
const TaskBoard = () => {
  const createButtonState = useSelector((state) => state.createButton);
  const tasks = useSelector((state) => state.todo);
  return (
    <div>
      <div className={style.taskBoard}>
        {createButtonState && <AddTaskCard></AddTaskCard>}
        {tasks.map((todo) => (
          <TaskCard key={todo.id} todo={todo}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
