import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
import Pagination from "components/Pagination";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
} from "utils/constant";
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

  const onCreateButtonClick = () => {
    setShowCreateCard(!showCreateCard);
  };

  const showPaginationButton = tasks.length + showCreateCard > PAGINATION_LIMIT;

  return (
    <div className={style.container}>
      <h1>Add Task</h1>
      <div>
        <button disabled={showCreateCard} onClick={onCreateButtonClick}>
          Create
        </button>
      </div>
      <div className={style.taskBoard}>
        {showCreateCard && (
          <AddTaskCard showCreateCard onCreateCard={setShowCreateCard} />
        )}
        <TaskList limit={pagination} tasks={tasks}></TaskList>
      </div>

      {showPaginationButton && (
        <Pagination
          showCreateCard={showCreateCard}
          taskListLength={tasks.length}
        >
          {pagination >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

export default TaskBoard;
