import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskCard from "components/TaskCard/AddTaskCard.jsx";
import style from "components/TaskBoard/index.module.scss";
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
import { paginationUpdate } from "store/actions/";
import TaskList from "components/TaskList";
import Loading from "components/Shared/Loading";
import EmptyPage from "components/EmptyPage";

const TaskBoard = ({ onSearchText }) => {
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [filter, setFilter] = useState(FILTER_STATE_ALL);
  const pagination = useSelector((state) => state.paginationLength);
  const tasks = useSelector((state) => state.todo);
  const isLoading = useSelector((state) => state.loadingState);

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

  const showPaginationButton = taskLength + showCreateCard > PAGINATION_LIMIT;
  const showEmptyCard = Boolean(taskLength + showCreateCard);

  return (
    <div className={style.container}>
      {isLoading && <Loading />}
      <h1>Add Task</h1>
      <div className={style.topBar}>
        <button
          className={style.createButton}
          disabled={showCreateCard}
          onClick={onCreateButtonClick}
        >
          <img
            className={style.addIcon}
            src={ICON_ADD}
            alt={ADD_ICON_ALT_TEXT}
          />
          Create
        </button>
        <div className={style.filterBar}>
          {filterButtons.map((button) => (
            <button
              key={button.filter}
              onClick={() => setFilter(button.filter)}
              className={classNames({
                [style.filterButton]: true,
                [style.filterButtonActive]: button.filter == filter,
              })}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className={style.taskBoard}>
        {showEmptyCard || (
          <EmptyPage
            onShowCreateCard={setShowCreateCard}
            showCreateCard={showCreateCard}
          />
        )}

        {showCreateCard && (
          <AddTaskCard
            onSearchText={onSearchText}
            showCreateCard={showCreateCard}
            onCreateCard={setShowCreateCard}
            setFilter={setFilter}
          />
        )}
        <TaskList
          setTaskLength={setTaskLength}
          filter={filter}
          limit={pagination}
          tasks={tasks}
          showCreateCard={showCreateCard}
        ></TaskList>
      </div>

      {showPaginationButton && (
        <Pagination showCreateCard={showCreateCard} taskListLength={taskLength}>
          {pagination >= tasks.length ? TEXT_SHOW_LESS : TEXT_SHOW_MORE}
        </Pagination>
      )}
    </div>
  );
};

TaskBoard.propTypes = {
  onSearchText: PropTypes.func.isRequired,
};
export default TaskBoard;
