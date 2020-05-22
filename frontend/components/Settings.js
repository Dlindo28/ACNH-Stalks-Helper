import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";

import DateSetting from "./DateSetting.js";
// Date
// Time
// Notifications (switch)
// Rate App
// Reset

import { primaryColors } from "../models/Styles.js";

import DateSetting from "./DateSetting.js";
// Date
// Time
// Notifications (switch)
// Rate App
// Reset

import { primaryColors } from "../models/Styles.js";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <DateSetting />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  header: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 30,
  },
  line: {
    height: 1,
    backgroundColor: primaryColors.darkgreen,
    marginBottom: 5,
  },
});

export default Settings;
