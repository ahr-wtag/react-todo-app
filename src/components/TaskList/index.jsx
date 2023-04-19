import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationUpdate } from "store/actions";
import {
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
  PAGINATION_LIMIT,
} from "utils/constant";

const TaskList = ({ tasks, limit, filter, setTaskLength }) => {
  const [editableTask, setEditableTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const searchText = useSelector((state) => state.searchText);

  const dispatch = useDispatch();
  const getCompletedTasks = () => {
    return tasks
      .filter((todo) => todo.completed == true)
      .filter((task) =>
        task.task.toLowerCase().includes(searchText.toLowerCase())
      );
  };

  const getIncompletedTasks = () => {
    return tasks
      .filter((todo) => todo.completed !== true)
      .filter((task) =>
        task.task.toLowerCase().includes(searchText.toLowerCase())
      );
  };
  const getAllTasks = () => {
    return tasks.filter((task) =>
      task.task.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    switch (filter) {
      case FILTER_STATE_COMPLETE:
        setFilteredTasks(getCompletedTasks);
        break;
      case FILTER_STATE_INCOMPLETE:
        setFilteredTasks(getIncompletedTasks);
        break;
      case FILTER_STATE_ALL:
        setFilteredTasks(getAllTasks);
        break;
    }
  }, [tasks, filter, searchText]);

  useEffect(() => {
    setTaskLength(filteredTasks.length);
  }, [filteredTasks]);

  useEffect(() => {
    dispatch(paginationUpdate(PAGINATION_LIMIT));
  }, [filter]);

  return filteredTasks
    .slice(0, limit)
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
    );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setTaskLength: PropTypes.func.isRequired,
};
export default TaskList;
