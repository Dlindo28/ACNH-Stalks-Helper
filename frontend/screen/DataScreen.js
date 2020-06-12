import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Modal, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

import ChartFull from "../components/ChartFull";
import TouchableButton from "../components/TouchableButton";
import FullPriceEntry from "../components/FullPriceEntry";

const DataScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const resetPrices = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      for (const key of keys) {
        if (days.includes(key)) {
          await AsyncStorage.removeItem(key);
        }
      }
      await AsyncStorage.removeItem("tree");
      Alert.alert("Prices Reset", "Prices reset successfully", [
        { text: "OK" },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const printStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const s = await AsyncStorage.multiGet(keys);
      console.log(s);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <FullPriceEntry setModalVisible={setModalVisible} />
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
      <TouchableButton
        onPress={printStorage}
        backgroundColor={secondaryColors.purple}
        color={primaryColors.cream}
        text="Print Storage"
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
    width: Dimensions.get("window").width / 1.05,
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
