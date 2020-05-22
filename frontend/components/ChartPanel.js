import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  AsyncStorage,
  Button,
} from "react-native";

import { primaryColors } from "../models/Styles.js";

const ChartPanel = ({ setPanelState, panelIsOpen }) => {
  const togglePanel = () => {
    setPanelState(!panelIsOpen);
  };

  if (panelIsOpen) {
    return (
      <View style={styles.openPanel}>
        <Button onPress={togglePanel} title="Close" />
      </View>
    );
  } else {
    return (
      <View>
        <TouchableWithoutFeedback onPress={togglePanel}>
          <View style={styles.closedPanel}></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  closedPanel: {
    backgroundColor: primaryColors.cream,
    height: 380,
    width: 380,
    borderRadius: 10,
    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  openPanel: {
    backgroundColor: primaryColors.cream,
    height: 600,
    width: 380,
    borderRadius: 10,
    position: "absolute",
    marginLeft: -190,
    marginTop: -300,
    zIndex: 1,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

export default ChartPanel;
