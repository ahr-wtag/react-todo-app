import PropTypes from "prop-types";
import React from "react";
import TaskCard from "components/TaskCard";

const TaskList = ({ tasks }) =>
  tasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      taskName={task.task}
      createdDate={task.createdDate}
      completed={task.completed}
    />
  ));

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
