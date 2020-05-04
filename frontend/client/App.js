import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "./Styles.js";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["lightgreen"],
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 60,
    borderTopColor: colors["darkgreen"],
  },
});
