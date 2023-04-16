import TaskCard from "components/TaskCard";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationUpdate } from "store/actions";
import { ALL, COMPLETE, INCOMPLETE, PAGINATION_LIMIT } from "utils/constant";

const TaskList = ({ tasks, limit, filter, setTaskLength }) => {
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
      case COMPLETE:
        setFilteredTasks(getCompletedTasks());
        break;
      case INCOMPLETE:
        setFilteredTasks(getIncompletedTasks);
        break;
      case ALL:
        setFilteredTasks(tasks);
        break;
    }
  }, [tasks, filter]);

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
