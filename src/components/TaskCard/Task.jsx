import React, { useState } from "react";
import PropTypes from "prop-types";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import TaskCard from "components/TaskCard";
import { datePropTypeValidation } from "utils/helpers/datePropTypeValidation";

const Task = ({ task }) => {
  const [isEditable, setIsEditable] = useState(false);

  function toggleTaskEditing() {
    setIsEditable((isEditable) => !isEditable);
  }

  return (
    <>
      {isEditable ? (
        <EditTaskCard
          id={task.id}
          taskName={task.task}
          onToggleTaskEditing={toggleTaskEditing}
        />
      ) : (
        <TaskCard
          id={task.id}
          taskName={task.task}
          createdDate={task.createdDate}
          completed={task.completed}
          onToggleTaskEditing={toggleTaskEditing}
        />
      )}
    </>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    createdDate: datePropTypeValidation,
    completed: PropTypes.bool.isRequired,
  }),
};

export default Task;
