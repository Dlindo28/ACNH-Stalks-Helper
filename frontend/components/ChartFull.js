import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
  Dimensions,
} from "react-native";

import { primaryColors } from "../models/Styles.js";

const ChartFull = () => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.closedPanel}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  closedPanel: {
    backgroundColor: primaryColors.cream,
    height: Dimensions.get("window").height / 1.4,
    width: Dimensions.get("window").width / 1.1,
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

export default ChartFull;
