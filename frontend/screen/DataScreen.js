import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { primaryColors } from "../models/Styles.js";

const DataScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Screen</Text>
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

export default DataScreen;
