import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Date
// Time
// Notifications (switch)
// Rate App
// Reset

import { primaryColors } from "../models/Styles.js";

import DateTimeSetter from "../components/DateTimeSetter";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.card}>
        <DateTimeSetter />
      </View>
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
  card: {
    backgroundColor: primaryColors.islandgreen,
  },
});

export default Settings;
