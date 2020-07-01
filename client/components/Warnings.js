import React from "react";
import { StyleSheet, View, Dimensions, SectionList, Text } from "react-native";
import Constants from "expo-constants";

import { primaryColors, secondaryColors } from "../models/Styles";

import TouchableButton from "./TouchableButton";

const data = [
  {
    title: "Insufficient Data",
    data: [
      "Your Sunday and/or Monday AM prices are missing. These two prices " +
        "are necessary for determining price trends.",
    ],
  },
  {
    title: "Missing Prices",
    data: [
      "You are missing prices since your last input. Estimations may be " +
        "incorrect.",
    ],
  },
];

const Warnings = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerText}>{section.title}</Text>
          )}
        />
      </View>

      <TouchableButton
        onPress={onClose}
        color={primaryColors.cream}
        backgroundColor={primaryColors.darkgreen}
        text="Close"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: Dimensions.get("window").height,
    backgroundColor: primaryColors.cream,
  },
  list: {
    height: Dimensions.get("window").height / 1.1,
    alignSelf: "center",
    width: Dimensions.get("window").width / 1.1,
  },
  itemText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
  },
  headerText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    fontSize: 25,
  },
  itemContainer: {
    backgroundColor: primaryColors.islandgreen,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});
export default Warnings;