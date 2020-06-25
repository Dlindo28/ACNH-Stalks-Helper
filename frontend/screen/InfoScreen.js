/**
 * @file Builds Information Screen
 * @author Daniel Lindo
 */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from "react-native";

import { primaryColors, secondaryColors } from "../models/Styles";

import TouchableButton from "../components/TouchableButton";

/**
 * Builds Info Screen component
 * @function InfoScreen
 * @param {*} navigation -  Screen navigation handler
 * @returns {JSX.Element}
 */
const InfoScreen = ({ navigation }) => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Info</Text>
        <TouchableButton
          onPress={() => setInfoModalVisible(true)}
          color={primaryColors.cream}
          backgroundColor={primaryColors.darkgreen}
          text="How It Works"
        />
        <TouchableButton
          onPress={() => console.log("Warnings")}
          color={primaryColors.darkgreen}
          backgroundColor={secondaryColors.rose}
          text="Warnings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    alignItems: "center",
    paddingTop: 50,
  },
});

export default InfoScreen;
