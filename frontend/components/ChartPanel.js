import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import { primaryColors, fonts } from "../models/Styles.js";
import { day } from "../models/Dates.js";

const Panel = ({ open, togglePanel }) => {
  if (open) {
    return (
      <View>
        <TouchableWithoutFeedback onPress={togglePanel}>
          <View style={styles.openPanel}></View>
        </TouchableWithoutFeedback>
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

export default function DateHeader() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const togglePanel = () => {
    setPanelIsOpen(!panelIsOpen);
  };
  return <Panel open={panelIsOpen} togglePanel={togglePanel} />;
}

const styles = StyleSheet.create({
  closedPanel: {
    backgroundColor: primaryColors.cream,
    height: 380,
    width: 380,
    borderRadius: 10,
    marginTop: 5,
  },
  openPanel: {
    backgroundColor: primaryColors.cream,
    height: 600,
    width: 380,
    borderRadius: 10,
    position: "absolute",
    marginLeft: -190,
    marginTop: -150,
  },
});
