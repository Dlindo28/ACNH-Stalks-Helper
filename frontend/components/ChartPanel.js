import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
  Dimensions,
} from "react-native";

import Chart from "./Chart";
import { primaryColors } from "../models/Styles.js";

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
    height: 380,
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
