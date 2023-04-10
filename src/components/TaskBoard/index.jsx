import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskCard from "components/TaskCard";
import style from "components/TaskBoard/index.module.scss";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import Pagination from "components/Pagination";
import { PAGINATION } from "utils/constant/form";
import { paginationUpdate } from "store/actions/";
const TaskBoard = () => {
  const createButtonState = useSelector((state) => state.createButton);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const editableTask = useSelector((state) => state.editButton);
  const dispatch = useDispatch();

  useEffect(() => {
    if (createButtonState) {
      dispatch(paginationUpdate(pagination - 1));
    } else {
      if (pagination < PAGINATION) {
        dispatch(paginationUpdate(pagination + 1));
      }
    }
  }, [createButtonState]);

  return (
    <div>
      <div className={style.taskBoard}>
        {createButtonState && <AddTaskCard />}
        {tasks
          .slice(0, pagination)
          .map((todo) =>
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

      {tasks.length + createButtonState > PAGINATION ? (
        <Pagination taskListLength={tasks.length}>
          {pagination >= tasks.length ? "Show Less" : "Load More"}
        </Pagination>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskBoard;
