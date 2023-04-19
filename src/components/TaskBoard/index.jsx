import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import Pagination from "components/Pagination";
import { PAGINATION_LIMIT, SHOW_MORE, SHOW_LESS } from "utils/constant";
import { paginationUpdate } from "store/actions/";
import TaskList from "components/TaskList";
const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCreateCard) {
      dispatch(paginationUpdate(pagination - 1));
    } else {
      if (pagination != PAGINATION_LIMIT) {
        dispatch(paginationUpdate(pagination + 1));
      }
    }
  }, [showCreateCard]);
  console.log(pagination);
  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button
          disabled={showCreateCard}
          onClick={() => setShowCreateCard(!showCreateCard)}
        >
          Create
        </button>
      </div>
      <div className={style.taskBoard}>
        {showCreateCard && (
          <AddTaskCard showCreateCard setShowCreateCard={setShowCreateCard} />
        )}
        <TaskList limit={pagination} tasks={tasks}></TaskList>
      </div>

      {tasks.length + showCreateCard > PAGINATION_LIMIT ? (
        <Pagination
          showCreateCard={showCreateCard}
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
