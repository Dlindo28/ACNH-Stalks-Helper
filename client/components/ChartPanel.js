/**
 * @file Builds component for Home screen chart panel
 * @author Daniel Lindo
 */

import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Chart from "./Chart";
import { primaryColors } from "../models/Styles.js";

/**
 * Home screen chart panel component
 * @function ChartPanel
 * @param {*} navigation - Screen navigation handler
 * @returns {JSX.Element}
 */
const ChartPanel = ({ navigation }) => {
  const navigateToChart = () => {
    navigation.navigate("Data");
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={navigateToChart}>
        <View style={styles.closedPanel}>
          <Chart homeChart />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  closedPanel: {
    backgroundColor: primaryColors.cream,
    height: hp("50%"),
    width: Dimensions.get("window").width / 1.05,
    borderRadius: 10,
    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

export default ChartPanel;
