import React from "react";
import { ICON_TICK } from "utils/constant";
export const NOTIFICATION_SETTINGS = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const NOTIFICATION_SETTINGS_SUCCESS = {
  ...NOTIFICATION_SETTINGS,
  icon: <img src={ICON_TICK} alt="Success Icon" />,
};

export const NOTIFICATION_MESSAGE_ADD_TASK = "Task Created!";
export const NOTIFICATION_MESSAGE_DELETE_TASK = "Task Deleted!";
export const NOTIFICATION_MESSAGE_COMPLETE_TASK = "Task Completed!";
export const NOTIFICATION_MESSAGE_UPDATE_TASK = "Task Updated!";
export const NOTIFICATION_MESSAGE_EMPTY_TASK = "Task Title Can Not Be Empty!";
export const NOTIFICATION_MESSAGE_PROCESSING_ERROR =
  "We Couldn't Save Your Changes!";
