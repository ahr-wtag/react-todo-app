import React from "react";
import style from "components/Shared/Loading/index.module.scss";
const Loading = () => {
  return (
    <div className={style.screenBlocker}>
      <div className={style.container}>
        <div className={style.loader}></div>
      </div>
    </div>
  );
};

export default Loading;
