import { toast } from "react-toastify";
import {
  NOTIFICATION_SETTINGS_ERROR,
  NOTIFICATION_SETTINGS_SUCCESS,
} from "utils/constant";

export const showSuccessToast = (message) => {
  toast.success(message, NOTIFICATION_SETTINGS_SUCCESS);
};

export const showErrorToast = (message) => {
  toast.error(message, NOTIFICATION_SETTINGS_ERROR);
};
