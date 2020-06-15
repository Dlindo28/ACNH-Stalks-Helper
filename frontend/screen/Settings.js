import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Notifications (switch)
// Rate App
// Reset (remove auth, reset time, reset prices)

import TouchableButton from "../components/TouchableButton";
import { useNotifications } from "../hooks/useNotifications";

import { primaryColors, secondaryColors } from "../models/Styles.js";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <TouchableButton
        backgroundColor={primaryColors.white}
        color={primaryColors.darkgreen}
        text="How It Works"
      />
      <TouchableButton
        backgroundColor={primaryColors.white}
        color={primaryColors.darkgreen}
        text="Notifications"
      />
      <TouchableButton
        backgroundColor={primaryColors.white}
        color={primaryColors.darkgreen}
        text="Customize (chart, etc.)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
  },
  header: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 30,
    fontFamily: "acnh",
  },
  line: {
    height: 1,
    backgroundColor: primaryColors.darkgreen,
    marginBottom: 5,
  },
});

export default Settings;
