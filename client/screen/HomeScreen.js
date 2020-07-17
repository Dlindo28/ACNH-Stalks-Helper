/**
 * @file Builds Home/Landing Screen
 * @author Daniel Lindo
 */

import React from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { primaryColors } from "../models/Styles";

import HomePriceEntry from "../components/HomePriceEntry";
import DateHeader from "../components/DateHeader";
import ChartPanel from "../components/ChartPanel";
import ErrorBadge from "../components/ErrorBadge";

/**
 * Hides keyboard on press
 * @function DismissKeyboard
 * @param {*} children -  JSX elements to be wrapped
 * @returns {JSX.Element} - wrapped component
 */
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

/**
 * Builds Home Screen component
 * @function HomeScreen
 * @param {*} navigation -  Screen navigation handler
 * @returns {JSX.Element}
 */
const HomeScreen = ({ navigation }) => {
  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <DateHeader />
          <HomePriceEntry />
          <ChartPanel navigation={navigation} />
          <ErrorBadge navigation={navigation} />
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + hp("3%"),
  },
});

export default HomeScreen;
