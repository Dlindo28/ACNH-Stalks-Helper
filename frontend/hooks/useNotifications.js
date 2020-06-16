/**
 * @file Build notification hooks
 * @author Daniel Lindo
 */
import { useState, useEffect } from "react";
import { Vibration, Platform, Alert } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

/**
 * Hook for sending notifications
 * @function useNotifications
 * @returns {function} sendPushNotification
 */
export const useNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState({});
  const [notificationSubscription, setNotificationSubscription] = useState();

  /**
   * Register device for push notifications
   * @function registerForPushNotifications
   * @returns {void}
   */
  const registerForPushNotifications = async () => {
    // Check if on device (push notifications don't work on simulators)
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      // Check if permission is granted for notifications
      if (existingStatus != "granted") {
        Alert.alert("Alert", "Notifications Not Available", [{ text: "OK" }]);
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      setExpoPushToken(token);
    }

    // Set notifications config for Android
    if (Platform.OS == "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  /**
   * Sets notification, runs when notification is sent
   * @param {string} notification - notification message
   * @returns {void}
   */
  const handleNotifications = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    setNotification({ notification: notification });
  };

  /**
   * Sends push notification via Expo host API
   * @param {string} note - notification body
   * @returns {void}
   */
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

// let finalStatus = exisitingStatus
