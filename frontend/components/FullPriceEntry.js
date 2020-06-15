/**
 * @file Builds page for full-week price entry
 * @author Daniel Lindo
 */

/**
 * TODO: might need to use onChangeText() for
 * when the user types in a price, then
 * touches another input field before submitting
 *
 * TODO: Change sunday price input to allow a ratio
 * and/or tree init if the sunday input makes
 * data sufficient
 */

import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TextInput, Text, Dimensions } from "react-native";
import { useSetPrice } from "../hooks";
import AsyncStorage from "@react-native-community/async-storage";

import TouchableButton from "./TouchableButton";

import { primaryColors } from "../models/Styles";

/**
 * Gets price from AsyncStorage given day
 * @function getPrice
 * @param {string} day - day interval to get price of
 * @returns {string} - price at day
 */
const getPrice = async (day) => {
  const price = await AsyncStorage.getItem(day);
  return price != null ? price : "0";
};

/**
 * Builds component for row input of each day
 * @function PricedayRow
 * @param {string} day
 * @returns {JSX.Element} - given day's row for input
 */
const PricedayRow = ({ day }) => {
  const setPrice = useSetPrice();
  const [amPrice, setAmPrice] = useState();
  const [pmPrice, setPmPrice] = useState();
  useEffect(() => {
    (async () => {
      setAmPrice(await getPrice(`${day}AM`));
      setPmPrice(await getPrice(`${day}PM`));
    })();
  }, []);

  return (
    <View>
      <Text style={styles.rowHeader}>{day}</Text>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.rowInput}
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={(e) =>
            e.nativeEvent.text != ""
              ? setPrice(e.nativeEvent.text, `${day}AM`)
              : console.log("Tried to enter empty price")
          }
          placeholder={amPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
        <TextInput
          style={styles.rowInput}
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={(e) =>
            e.nativeEvent.text != ""
              ? setPrice(e.nativeEvent.text, `${day}PM`)
              : console.log("Tried to enter empty price")
          }
          placeholder={pmPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
      </View>
    </View>
  );
};

/**
 * @function FullPriceEntry
 * @param {function} setModalVisible - changes state of modal
 */
const FullPriceEntry = ({ setModalVisible }) => {
  const setPrice = useSetPrice();
  const [sunPrice, setSunPrice] = useState();

  const handleConfirm = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      setSunPrice(await getPrice("Sunday"));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.rowHeader}>Sunday</Text>
      <TextInput
        style={{
          ...styles.rowInput,
          marginBottom: 10,
        }}
        placeholder={sunPrice}
        placeholderTextColor={primaryColors.darkgreen}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={(e) =>
          e.nativeEvent.text != ""
            ? setPrice(e.nativeEvent.text, "Sunday")
            : console.log("Tried to enter empty price")
        }
      />
      <PricedayRow day="Monday" />
      <PricedayRow day="Tuesday" />
      <PricedayRow day="Wednesday" />
      <PricedayRow day="Thursday" />
      <PricedayRow day="Friday" />
      <PricedayRow day="Saturday" />
      <TouchableButton
        onPress={handleConfirm}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Close"
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
  rowInput: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: primaryColors.darkgreen,
    borderRadius: 5,
    backgroundColor: primaryColors.white,
    height: 30,
    width: Dimensions.get("window").width / 2.5,
    paddingLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  rowHeader: {
    fontSize: 13,
    fontFamily: "acnh",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default FullPriceEntry;
