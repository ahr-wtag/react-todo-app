import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskCard from "components/TaskCard";
import style from "components/TaskBoard/index.module.scss";
const TaskBoard = () => {
  const [createButtonState, setCreateButtonState] = useState(false);
  const tasks = useSelector((state) => state.todo);
  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button
          disabled={createButtonState}
          onClick={() => setCreateButtonState(!createButtonState)}
        >
          Create
        </button>
      </div>
      <div className={style.taskBoard}>
        {createButtonState && (
          <AddTaskCard
            createButtonState
            setCreateButtonState={setCreateButtonState}
          />
        )}
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
    </div>
  );
};

export default TaskBoard;
