import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import Chart from "./Chart";

import { primaryColors, secondaryColors } from "../models/Styles.js";

const ChartFull = () => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.chartContainer}>
          <Chart />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: primaryColors.cream,
    borderRadius: 10,
    height: Dimensions.get("window").height / 1.5,
    paddingTop: 15,
  },
});

export default ChartFull;
