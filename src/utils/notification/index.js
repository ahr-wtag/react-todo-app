import { toast } from "react-toastify";
import { NOTIFICATION_SETTINGS } from "utils/constant";

export const showSuccessToast = (message) => {
  toast.success(message, NOTIFICATION_SETTINGS);
};

export const showErrorToast = (message) => {
  toast.error(message, NOTIFICATION_SETTINGS);
};
