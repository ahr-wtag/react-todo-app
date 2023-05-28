import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "store/actions";
import { getDateDifference } from "utils/helpers/getDateDifference";
import { formatDate } from "utils/helpers/formatDate";
import TaskCompletedDays from "components/shared/TaskCompleteDays";
import DeleteIcon from "components/shared/image/DeleteIcon";
import CompleteIcon from "components/shared/image/CompleteIcon";
import EditIcon from "components/shared/image/EditIcon";
import "components/TaskCard/index.scss";

const TaskCard = ({
  id,
  taskName,
  createdDate,
  completed,
  onToggleTaskEditing,
}) => {
  const taskCompletedIn = getDateDifference(createdDate);
  const dispatch = useDispatch();

  const taskTextStyle = classNames("task-card__task", {
    "task-card__task--done": completed,
  });

  function handleCompleteTask() {
    dispatch(completeTask(id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  function handleEditIconClick() {
    onToggleTaskEditing();
  }

  return (
    <div className="task-card">
      <h1 className={taskTextStyle}>{taskName}</h1>
      <p className="task-card__date">{`Created at: ${formatDate(
        createdDate
      )}`}</p>
      <div className="flex align-center justify-between task-card__action-button-container">
        {!completed && (
          <>
            <CompleteIcon onClick={handleCompleteTask} />
            <EditIcon onClick={handleEditIconClick} />
          </>
        )}
        <DeleteIcon onClick={handleDeleteTask} />
      </div>
      {completed && <TaskCompletedDays days={taskCompletedIn} />}
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleTaskEditing: PropTypes.func.isRequired,
};

export default TaskCard;
