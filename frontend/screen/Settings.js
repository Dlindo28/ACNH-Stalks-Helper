import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Notifications (switch)
// Rate App
// Reset (remove auth, reset time, reset prices)

import { primaryColors } from "../models/Styles.js";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
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
  },
  line: {
    height: 1,
    backgroundColor: primaryColors.darkgreen,
    marginBottom: 5,
  },
});

export default Settings;
