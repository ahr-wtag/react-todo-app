import React from "react";
import "components/Shared/Loading/index.scss";
const Loading = () => {
  return (
    <div className="screen-blocker">
      <div className="loading-container">
        <div className="loading-container__loader"></div>
      </div>
    </div>
  );
};

export default Loading;
