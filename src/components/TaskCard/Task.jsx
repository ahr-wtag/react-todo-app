import React, { useState } from "react";
import PropTypes from "prop-types";
import EditTaskCard from "components/TaskCard/EditTaskCard";
import TaskCard from "components/TaskCard";

const Task = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <>
      {isEditable ? (
        <EditTaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onEditableTasks={setIsEditable}
        />
      ) : (
        <TaskCard
          key={todo.id}
          id={todo.id}
          task={todo.task}
          createdTime={todo.createdTime}
          completed={todo.completed}
          onEditableTasks={setIsEditable}
        />
      )}
    </>
  );
};

Task.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Task;
