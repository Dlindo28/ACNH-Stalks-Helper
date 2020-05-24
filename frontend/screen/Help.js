import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { primaryColors } from "../models/Styles";

const Help = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>How It Works</Text>
        <Text style={styles.paragraph}>[Placeholder]</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    backgroundColor: primaryColors.islandgreen,
    borderRadius: 30,
  },
  modalContainer: {
    borderRadius: 30,
    backgroundColor: primaryColors.cream,
    height: 700,
    width: 380,
  },
  title: {
    alignSelf: "center",
    fontFamily: "acnh",
    fontSize: 30,
    paddingTop: 10,
    color: primaryColors.darkgreen,
  },
  paragraph: {
    color: primaryColors.darkgreen,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

export default Help;
