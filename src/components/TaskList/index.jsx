import React from "react";
import PropTypes from "prop-types";
import Task from "components/TaskCard/Task";

const TaskList = ({ tasks }) => {
  return tasks.map((task) => <Task key={task.id} task={task} />);
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

export default TaskList;
