import { notifications } from "@mantine/notifications";

export const notificationManager = {
  success: function (message: string) {
    notifications.show({
      message,
    });
  },

  error: function (message: string) {
    notifications.show({
      color: "red",
      message,
    });
  },
};
