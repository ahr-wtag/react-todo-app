import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import "components/TaskBoard/index.scss";
import Pagination from "components/Pagination";
import classNames from "classnames";
import {
  PAGINATION_LIMIT,
  TEXT_SHOW_MORE,
  TEXT_SHOW_LESS,
  ICON_ADD,
  ADD_ICON_ALT_TEXT,
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
} from "utils/constant";
import { paginationLimitUpdate } from "store/actions/";
import TaskList from "components/TaskList";
import EmptyPage from "components/EmptyPage";

const TaskBoard = () => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [filter, setFilter] = useState(FILTER_STATE_ALL);
  const paginationLength = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);

  const [taskLength, setTaskLength] = useState(tasks.length);

  const filterButtons = [
    { label: "All", filter: FILTER_STATE_ALL },
    { label: "Incomplete", filter: FILTER_STATE_INCOMPLETE },
    { label: "Complete", filter: FILTER_STATE_COMPLETE },
  ];

  useEffect(() => {
    setTaskLength(tasks.length);
  }, [tasks]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCreateCard) {
      dispatch(paginationLimitUpdate(paginationLength - 1));
    } else {
      if (paginationLength != PAGINATION_LIMIT) {
        dispatch(paginationLimitUpdate(paginationLength + 1));
      }
    }
  }, [showCreateCard]);

  function handleCreateTask() {
    setShowCreateCard(!showCreateCard);
  }

  const isPaginationButtonVisible =
    taskLength + showCreateCard > PAGINATION_LIMIT;
  const isTaskListEmpty = Boolean(taskLength + showCreateCard);

  return (
    <div className="task-board">
      <h1>Add Task</h1>
      <div className="top-bar">
        <button
          className="top-bar__create-button"
          disabled={showCreateCard}
          onClick={handleCreateTask}
        >
          <img
            className="top-bar__create-button__icon"
            src={ICON_ADD}
            alt={ADD_ICON_ALT_TEXT}
          />
          Create
        </button>
        <div className="top-bar__filter-bar">
          {filterButtons.map((button) => (
            <button
              key={button.filter}
              onClick={() => setFilter(button.filter)}
              className={classNames({
                "top-bar__filter-bar__button": true,
                "top-bar__filter-bar__button--active": button.filter == filter,
              })}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="task-board__container">
        {isTaskListEmpty || (
          <EmptyPage
            onShowCreateCard={setShowCreateCard}
            isCardCreated={showCreateCard}
          />
        )}

        {showCreateCard && (
          <AddTaskCard
            isCardCreated={showCreateCard}
            onCreateCard={setShowCreateCard}
            setFilter={setFilter}
          />
        )}
        <TaskList
          setTaskLength={setTaskLength}
          filter={filter}
          limit={paginationLength}
          tasks={tasks}
          isCardCreated={showCreateCard}
        />
      </div>

      {isPaginationButtonVisible && (
        <Pagination isCardCreated={showCreateCard} taskListLength={taskLength}>
          {paginationLength >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

export default TaskBoard;
