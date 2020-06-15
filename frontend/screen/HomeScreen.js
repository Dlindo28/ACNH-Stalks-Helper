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

import { primaryColors } from "../models/Styles";

import PriceArea from "../components/PriceArea";
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
          <PriceArea />
          <ChartPanel navigation={navigation} />
          <ErrorBadge />
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
    paddingTop: 50,
  },
  blurredImage: {
    width: 192,
    height: 192,
  },
  EGcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nonBlurredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  pageButtons: {
    flex: 1,
    marginTop: 2,
    width: "100%",
    flexDirection: "row",
  },
});

export default HomeScreen;
