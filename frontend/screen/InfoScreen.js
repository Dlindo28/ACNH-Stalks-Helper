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
import { Entypo } from "@expo/vector-icons";

import { primaryColors, secondaryColors } from "../models/Styles";

import TouchableButton from "../components/TouchableButton";
import Instructions from "../components/Instructions";
import Warnings from "../components/Warnings";

const warningIcon = (
  <Entypo
    name="warning"
    color={primaryColors.darkgreen}
    size={20}
    style={{
      justifyContent: "center",
      paddingTop: 5,
      marginRight: 5,
    }}
  />
);

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
        <Text style={styles.headerText}>Help</Text>
        <TouchableButton
          onPress={() => setInfoModalVisible(true)}
          color={primaryColors.cream}
          backgroundColor={primaryColors.darkgreen}
          text="How It Works"
          style={{
            marginBottom: 10,
          }}
        />
        <TouchableButton
          onPress={() => setWarningModalVisible(true)}
          color={primaryColors.darkgreen}
          backgroundColor={secondaryColors.rose}
          text="Warnings"
          icon={warningIcon}
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
  headerText: {
    fontFamily: "acnh",
    fontSize: 20,
  },
});

export default InfoScreen;
