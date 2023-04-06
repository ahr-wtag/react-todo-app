import React from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskCard from "components/TaskCard";
import style from "components/TaskBoard/index.module.scss";
const TaskBoard = () => {
  const createButtonState = useSelector((state) => state.createButton);
  const tasks = useSelector((state) => state.todo);
  return (
    <div className={style.taskBoard}>
      {createButtonState && <AddTaskCard />}
      {tasks.map((todo) => (
        <TaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          createdTime={todo.createdTime}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
