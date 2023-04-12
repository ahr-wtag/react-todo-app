import React from "react";
import PropTypes from "prop-types";
import { PAGINATION_LIMIT } from "utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { paginationUpdate } from "store/actions/";
import style from "components/Pagination/index.module.scss";
const Pagination = ({ children, createButtonState, taskListLength }) => {
  const pagination = useSelector((state) => state.paginationLength);
  const dispatch = useDispatch();
  const paginate = () => {
    if (pagination >= taskListLength) {
      dispatch(paginationUpdate(PAGINATION_LIMIT - createButtonState));
    } else {
      dispatch(paginationUpdate(PAGINATION_LIMIT + pagination));
    }
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={paginate}>
        {children}
      </button>
    </div>
  );
};
Pagination.propTypes = {
  children: PropTypes.string.isRequired,
  taskListLength: PropTypes.number.isRequired,
  createButtonState: PropTypes.bool.isRequired,
};

export default Pagination;
