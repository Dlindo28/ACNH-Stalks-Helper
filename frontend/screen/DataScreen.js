import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Dimensions,
  Modal,
  Alert,
} from "react-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";

import ChartFull from "../components/ChartFull";
import TouchableButton from "../components/TouchableButton";

const DataScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const resetPrices = async () => {
    try {
      const days = [
        "Sunday",
        "MondayAM",
        "MondayPM",
        "TuesdayAM",
        "TuesdayPM",
        "WednesdayAM",
        "WednesdayPM",
        "ThursdayAM",
        "ThursdayPM",
        "FridayAM",
        "FridayPM",
        "SaturdayAM",
        "SaturdayPM",
      ];
      const keys = await AsyncStorage.getAllKeys();
      for (const key of keys) {
        if (days.includes(key)) {
          await AsyncStorage.removeItem(key);
        }
      }
      Alert.alert("Prices Reset", "Prices reset successfully", [
        { text: "OK", onPress: () => console.log("items removed") },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePriceSet = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={styles.container}>
          <TouchableButton
            onPress={handlePriceSet}
            backgroundColor={primaryColors.darkgreen}
            color={primaryColors.cream}
            text="Confirm"
          />
        </View>
      </Modal>
      <ChartFull />
      <TouchableButton
        onPress={() => setModalVisible(true)}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Edit Prices"
      />
      <TouchableButton
        onPress={resetPrices}
        color={primaryColors.darkgreen}
        backgroundColor={secondaryColors.rose}
        text="Reset Prices"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 30,
  },
  line: {
    height: 1,
    backgroundColor: primaryColors.darkgreen,
    marginBottom: 5,
  },
  button: {
    backgroundColor: secondaryColors.rose,
    fontFamily: "acnh",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 1.1,
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonText: {
    paddingTop: 10,
    fontFamily: "acnh",
    color: primaryColors.cream,
  },
});

export default DataScreen;
