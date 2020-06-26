/**
 * @file Builds Information Screen
 * @author Daniel Lindo
 */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Modal,
} from "react-native";

import { primaryColors, secondaryColors } from "../models/Styles";

import TouchableButton from "../components/TouchableButton";
import Instructions from "../components/Instructions";
import Warnings from "../components/Warnings";

/**
 * Builds Info Screen component
 * @function InfoScreen
 * @param {*} navigation -  Screen navigation handler
 * @returns {JSX.Element}
 */
const InfoScreen = ({ navigation }) => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={infoModalVisible}
        transparent={false}
        animationType="slide"
      >
        <Instructions onClose={() => setInfoModalVisible(false)} />
      </Modal>

      <Modal
        visible={warningModalVisible}
        transparent={false}
        animationType="slide"
      >
        <Warnings onClose={() => setWarningModalVisible(false)} />
      </Modal>

      <View style={styles.container}>
        <Text>Info</Text>
        <TouchableButton
          onPress={() => setInfoModalVisible(true)}
          color={primaryColors.cream}
          backgroundColor={primaryColors.darkgreen}
          text="How It Works"
        />
        <TouchableButton
          onPress={() => setWarningModalVisible(true)}
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
