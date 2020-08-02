/**
 * @file Builds Information Screen
 * @author Daniel Lindo
 */

import React from "react";
import { StyleSheet, View, Text, SectionList, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Constants from "expo-constants";

import { primaryColors } from "../models/Styles";

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

/**
 * Builds Info Screen component
 * @function InfoScreen
 * @param {*} navigation -  Screen navigation handler
 * @returns {JSX.Element}
 */
const InfoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <Text style={styles.titleText}>Help</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    fontSize: wp("4.75%"),
    alignSelf: "center",
  },
  listContainer: {
    paddingTop: Constants.statusBarHeight + hp("3%"),
    paddingBottom: hp("8.5%"),
    height: Dimensions.get("window").height,
    backgroundColor: primaryColors.cream,
  },
  list: {
    height: Dimensions.get("window").height / 1.15,
    alignSelf: "center",
    width: Dimensions.get("window").width / 1.1,
  },
  itemText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    fontSize: wp("3.5%"),
  },
  headerText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    fontSize: wp("4.75%"),
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
    elevation: 3,
  },
});

export default InfoScreen;
