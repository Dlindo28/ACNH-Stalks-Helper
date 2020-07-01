import React from "react";
import { StyleSheet, View, Dimensions, SectionList, Text } from "react-native";
import Constants from "expo-constants";
import { primaryColors } from "../models/Styles";

import TouchableButton from "./TouchableButton";

const data = [
  {
    title: "Buying Turnips",
    data: [
      "Each Sunday, Daisy Mae will visit your island to sell turnips. " +
        "Buy from her and you may win big on bells later in the week!\n\n" +
        "Turnip prices change twice every day, once at 4 am and again at 12 pm.",
    ],
  },
  {
    title: "Entering Prices",
    data: [
      "You can enter current prices on the home screen, or edit prices for " +
        "the whole week on the chart screen.\n\nSunday and Monday AM prices are " +
        "mandatory for an accurate estimation.",
    ],
  },
  {
    title: "Price Trends",
    data: [
      "Random: Prices rise and drop randomly.",
      "Falling: Prices constantly fall. Worst Case.",
      "Small Spike: Prices peak once then continuously fall.",
      "Big Spike: Prices peak twice. Second peak is the max price. Best Case",
    ],
  },
];

const Instructions = ({ onClose }) => {
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
          stickySectionHeadersEnabled={false}
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

export default Instructions;
