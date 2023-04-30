import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationUpdate } from "store/actions";
import {
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
  PAGINATION_LIMIT,
} from "utils/constant";

const TaskList = ({ tasks, limit, filter, setTaskLength, showCreateCard }) => {
  const [editableTask, setEditableTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();
  const getCompletedTasks = () => {
    return tasks.filter((todo) => todo.completed == true);
  };

  const getIncompletedTasks = () => {
    return tasks.filter((todo) => todo.completed !== true);
  };
  useEffect(() => {
    switch (filter) {
      case FILTER_STATE_COMPLETE:
        setFilteredTasks(getCompletedTasks());
        break;
      case FILTER_STATE_INCOMPLETE:
        setFilteredTasks(getIncompletedTasks);
        break;
      case FILTER_STATE_ALL:
        setFilteredTasks(tasks);
        break;
    }
  }, [tasks, filter]);

  useEffect(() => {
    setTaskLength(filteredTasks.length);
  }, [filteredTasks]);

  useEffect(() => {
    showCreateCard
      ? dispatch(paginationUpdate(PAGINATION_LIMIT - 1))
      : dispatch(paginationUpdate(PAGINATION_LIMIT));
  }, [filter]);

  return filteredTasks
    .slice(0, limit)
    .map((todo) =>
      todo.id == editableTask ? (
        <EditTaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onEditableTask={setEditableTask}
        />
      ) : (
        <TaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          createdTime={todo.createdTime}
          completed={todo.completed}
          onEditableTask={setEditableTask}
        />
      )
    );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setTaskLength: PropTypes.func.isRequired,
  showCreateCard: PropTypes.bool.isRequired,
};

export default TaskList;
