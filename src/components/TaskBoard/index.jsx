import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import TaskCard from "components/TaskCard";
import style from "components/TaskBoard/index.module.scss";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import Pagination from "components/Pagination";
import { PAGINATION_LIMIT, SHOW_MORE, SHOW_LESS } from "utils/constant";
import { paginationUpdate } from "store/actions/";
const TaskBoard = () => {
  const [createButtonState, setCreateButtonState] = useState(false);
  const [editableTask, setEditableTask] = useState(false);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (createButtonState) {
      dispatch(paginationUpdate(pagination - 1));
    } else {
      if (pagination < PAGINATION_LIMIT) {
        dispatch(paginationUpdate(pagination + 1));
      }
    }
  }, [createButtonState]);

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
            createButtonState={createButtonState}
            setCreateButtonState={setCreateButtonState}
          />
        )}
        {tasks
          .slice(0, pagination)
          .map((todo) =>
            todo.id == editableTask ? (
              <EditTaskCard
                key={todo.id}
                id={todo.id}
                task={todo.task}
                setEditableTask={setEditableTask}
              />
            ) : (
              <TaskCard
                key={todo.id}
                id={todo.id}
                task={todo.task}
                createdTime={todo.createdTime}
                completed={todo.completed}
                setEditableTask={setEditableTask}
              />
            )
          )}
      </div>

      {tasks.length + createButtonState > PAGINATION_LIMIT ? (
        <Pagination
          createButtonState={createButtonState}
          taskListLength={tasks.length}
        >
          {pagination >= tasks.length ? SHOW_LESS : SHOW_MORE}
        </Pagination>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskBoard;
