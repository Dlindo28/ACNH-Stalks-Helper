import { useState, useEffect } from "react";
import { Vibration, Platform, Alert } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export const useNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState({});
  const [notificationSubscription, setNotificationSubscription] = useState();

  const registerForPushNotifications = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus != "granted") {
        Alert.alert("Alert", "Notifications Not Available", [{ text: "OK" }]);
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      setExpoPushToken(token);
    } else {
      Alert.alert("Alert", "Must use physical device for push notification!", [
        { text: "OK" },
      ]);
    }

    if (Platform.OS == "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  const handleNotifications = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    setNotification({ notification: notification });
  };

  const sendPushNotification = async (note) => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "ACNH Stalks helper",
      body: note,
      data: { data: "goes here" },
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  useEffect(() => {
    registerForPushNotifications();
    setNotificationSubscription(Notifications.addListener(handleNotifications));
  }, []);

  return sendPushNotification;
};
