import React from "react";
import { useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskCard from "components/TaskCard";
import style from "components/TaskBoard/index.module.scss";
import EditTaskCard from "components/TaskCard/EditTaskCard";
const TaskBoard = () => {
  const createButtonState = useSelector((state) => state.createButtonState);
  const tasks = useSelector((state) => state.todo);
  const editableTask = useSelector((state) => state.editButton);

  return (
    <div className={style.taskBoard}>
      {createButtonState && <AddTaskCard />}
      {tasks.map((todo) =>
        todo.id == editableTask ? (
          <EditTaskCard key={todo.id} id={todo.id} task={todo.task} />
        ) : (
          <TaskCard
            key={todo.id}
            id={todo.id}
            task={todo.task}
            createdTime={todo.createdTime}
            completed={todo.completed}
          />
        )
      )}
    </div>
  );
};

export default TaskBoard;
