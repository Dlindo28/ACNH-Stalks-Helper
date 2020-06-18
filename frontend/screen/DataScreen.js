/**
 * @file Builds complete data/chart screen
 * @author Daniel Lindo
 */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Modal,
  Text,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { clearYield, setCurPrice } from "../actions/yieldActions";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

import MainChartContainer from "../components/MainChartContainer";
import TouchableButton from "../components/TouchableButton";
import FullPriceEntry from "../components/FullPriceEntry";

/**
 * Provides the screen component for the full chart and data entry components
 * @function DataScreen
 * @return {JSX.Element}
 */
const DataScreen = () => {
  /** @const {Dispatch<any>} dispatch - redux dipatcher for yield, curPrice */
  const dispatch = useDispatch();

  const [priceModalVisible, setPriceModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [calculateModalVisible, setCalculateModalVisible] = useState(false);

  const curPrice = useSelector((store) => store.yield.curPrice);

  /**
   * Clears all prices and tree stored in AsyncStorage.
   *     Clears yield and currentPrice states in redux.
   * @function resetPrices
   * @returns {void}
   */
  const resetPrices = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      for (const key of keys) {
        if (days.includes(key)) {
          await AsyncStorage.removeItem(key);
        }
      }

      await AsyncStorage.removeItem("tree");
      dispatch(clearYield());
      dispatch(setCurPrice(0));

      setResetModalVisible(false);
    } catch (e) {
      console.log(e);
    }
  };
  //resetPrices();

  /**
   * Logs everything stored in AsyncStorage
   * @function printStorage
   * @returns {Promise<void>}
   */
  const printStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const storage = await AsyncStorage.multiGet(keys);
      console.log(storage);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Logs everything stored in AsyncStorage
   * @function printStorage
   * @returns {Promise<void>}
   */
  const calculatePrice = (numTurnips) => {
    const income = numTurnips * parseInt(curPrice, 10);
    Alert.alert("Current Income", `${income.toString()} bells`, [
      { text: "OK" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={priceModalVisible}
        animationType="slide"
        transparent={false}
      >
        <FullPriceEntry setPriceModalVisible={setPriceModalVisible} />
      </Modal>
      <Modal
        visible={resetModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.resetModalContainer}>
          <View style={styles.resetModalView}>
            <Text
              style={{
                ...styles.buttonText,
                color: primaryColors.cream,
                alignSelf: "center",
              }}
            >
              Are you sure?
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableButton
                onPress={() => setResetModalVisible(false)}
                color={primaryColors.darkgreen}
                backgroundColor={secondaryColors.rose}
                width={Dimensions.get("window").width / 1.05 / 2}
                text="No, Return"
                bottomLeftRadius
              />
              <TouchableButton
                onPress={resetPrices}
                color={primaryColors.darkgreen}
                backgroundColor={primaryColors.islandgreen}
                width={Dimensions.get("window").width / 1.05 / 2}
                text="Yes, Reset Prices"
                bottomRightRadius
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={calculateModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.resetModalContainer}>
          <View style={styles.resetModalView}>
            <Text
              style={{
                ...styles.buttonText,
                color: primaryColors.cream,
                alignSelf: "center",
              }}
            >
              How many turnips did you purchase?
            </Text>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                returnKeyType="done"
                onEndEditing={(e) =>
                  e.nativeEvent.text != ""
                    ? calculatePrice(parseInt(e.nativeEvent.text, 10))
                    : console.log("Tried to enter empty price")
                }
                placeholder={"0"}
                placeholderTextColor={primaryColors.darkgreen}
              />
              <TouchableButton
                onPress={() => setCalculateModalVisible(false)}
                color={primaryColors.darkgreen}
                backgroundColor={secondaryColors.rose}
                width={Dimensions.get("window").width / 1.05 / 2}
                text="Close"
              />
            </View>
          </View>
        </View>
      </Modal>
      <MainChartContainer />
      <TouchableButton
        onPress={() => setPriceModalVisible(true)}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Edit Prices"
      />
      <TouchableButton
        onPress={() => setResetModalVisible(true)}
        color={primaryColors.darkgreen}
        backgroundColor={secondaryColors.rose}
        text="Reset Prices"
      />
      <TouchableButton
        onPress={() => setCalculateModalVisible(true)}
        color={primaryColors.darkgreen}
        backgroundColor={primaryColors.islandyellow}
        text="Calculate Income"
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
  resetModalContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  resetModalView: {
    backgroundColor: primaryColors.darkgreen,
    borderRadius: 10,

    width: Dimensions.get("window").width / 1.05,
  },
  input: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: primaryColors.darkgreen,
    borderRadius: 5,
    backgroundColor: primaryColors.white,
    height: 30,
    width: Dimensions.get("window").width / 2.5,
    paddingLeft: 10,
    alignSelf: "center",
  },
  touchButton: {
    backgroundColor: primaryColors.islandgreen,
    color: primaryColors.darkgreen,
  },
});

export default DataScreen;
