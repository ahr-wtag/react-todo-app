import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions";
import { ICON_DELETE, DELETE_ICON_ALT_TEXT } from "utils/constant/images";
import style from "components/TaskCard/index.module.scss";
import { checkDateString } from "utils/helpers/propCustomValidation";
import { dateFormatter } from "utils/helpers/dateFormatter";

const TaskCard = ({ id, task, createdTime }) => {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteTask(id));
  }

  return (
    <div className={style.container}>
      <p>{task}</p>
      <p>{`Created at: ${dateFormatter(createdTime)}`}</p>
      <div className={style.actionButtonContainer}>
        <img
          src={ICON_DELETE}
          alt={DELETE_ICON_ALT_TEXT}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  createdTime: checkDateString,
};

export default TaskCard;
