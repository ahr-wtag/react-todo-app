import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import "components/TaskBoard/index.scss";
import Pagination from "components/Pagination";
import PropTypes from "prop-types";
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
import Loading from "components/Shared/Loading";
import EmptyPage from "components/EmptyPage";

const TaskBoard = ({ onSearchBarVisible }) => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [filterState, setFilterState] = useState(FILTER_STATE_ALL);
  const paginationLength = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const isLoading = useSelector((state) => state.loadingState);
  const [taskLength, setTaskLength] = useState(tasks.length);
  const dispatch = useDispatch();
  const isPaginationButtonVisible =
    taskLength + showCreateCard > PAGINATION_LIMIT;
  const isTaskListEmpty = Boolean(taskLength + showCreateCard);

  const filterButtons = [
    { label: "All", filter: FILTER_STATE_ALL },
    { label: "Incomplete", filter: FILTER_STATE_INCOMPLETE },
    { label: "Complete", filter: FILTER_STATE_COMPLETE },
  ];

  useEffect(() => {
    setTaskLength(tasks.length);
  }, [tasks]);

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

  return (
    <div className="task-board">
      {isLoading && <Loading />}
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
              onClick={() => setFilterState(button.filter)}
              className={classNames({
                "top-bar__filter-bar__button": true,
                "top-bar__filter-bar__button--active":
                  button.filter == filterState,
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
            onSearchBarVisible={onSearchBarVisible}
            isCardCreated={showCreateCard}
            onCreateCard={setShowCreateCard}
            onFilterState={setFilterState}
          />
        )}
        <TaskList
          setTaskLength={setTaskLength}
          filterState={filterState}
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

TaskBoard.propTypes = {
  onSearchBarVisible: PropTypes.func.isRequired,
};
export default TaskBoard;
