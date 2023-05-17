import { toast } from "react-toastify";
import {
  NOTIFICATION_SETTINGS,
  NOTIFICATION_SETTINGS_SUCCESS,
} from "utils/constant";

export const showSuccessToast = (message) => {
  toast.dismiss();
  toast.success(message, NOTIFICATION_SETTINGS_SUCCESS);
};

export const showErrorToast = (message) => {
  toast.dismiss();
  toast.error(message, NOTIFICATION_SETTINGS);
};
