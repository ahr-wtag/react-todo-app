import React from "react";
import PropTypes from "prop-types";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks, limit }) => {
  const paginatedTasks = tasks.slice(0, limit);
  return paginatedTasks.map((task) => <Task key={task.id} task={task} />);
};

TaskList.propTypes = {
  limit: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

export default TaskList;
