/**
 * @file Builds settings screen
 * @author Daniel Lindo
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TouchableButton from "../components/TouchableButton";

import { primaryColors } from "../models/Styles.js";

/**
 * Provides the screen component for user settings
 * @function Settings
 * @returns {JSX.Element}
 */
const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>
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
  headerText: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 30,
    fontFamily: "acnh",
  },
});

export default Settings;
