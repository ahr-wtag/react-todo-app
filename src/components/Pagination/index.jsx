import React from "react";
import PropTypes from "prop-types";
import { PAGINATION_LIMIT } from "utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { paginationLimitUpdate } from "store/actions/";
import "components/Pagination/index.scss";

const Pagination = ({ children, isCardCreated, taskListLength }) => {
  const paginationLength = useSelector((state) => state.paginationLength);

  const dispatch = useDispatch();

  function handlePaginateButtonClick() {
    if (paginationLength >= taskListLength) {
      dispatch(paginationLimitUpdate(PAGINATION_LIMIT - isCardCreated));
    } else {
      dispatch(paginationLimitUpdate(PAGINATION_LIMIT + paginationLength));
    }
  }

  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        onClick={handlePaginateButtonClick}
      >
        {children}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  children: PropTypes.string.isRequired,
  taskListLength: PropTypes.number.isRequired,
  isCardCreated: PropTypes.bool.isRequired,
};

export default Pagination;
