import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Keyboard,
  AsyncStorage,
} from "react-native";
import { getDay, getHours, getMeridian, getMinutes } from "../models/Dates";

import { useSelector, useDispatch } from "react-redux";
import { setDataSufficiency } from "../actions/dataSufficiencyActions";

import { primaryColors } from "../models/Styles";

export default function PriceArea() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.datetime.date);
  const [price, setPrice] = useState();

  const setAsyncStoragePrice = async (input, date) => {
    try {
      const day = getDay(date);
      const meridian = getMeridian(date);
      const key = day != "Sunday" ? day + meridian : day;
      await AsyncStorage.setItem(key, input);
      if (key == "MondayAM") {
        setAsyncStorageTypes();
      }
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  const setAsyncStorageTypes = async () => {
    try {
      const sundayPrice = await AsyncStorage.getItem("Sunday");
      const modayPrice = await AsyncStorage.getItem("MondayAM");
      const ratio = Number(modayPrice) / Number(sundayPrice);
      console.log(ratio);
      checkSufficiency();
    } catch (e) {
      handleMissingBuyPrice();
      console.log(e);
    }
  };

  const checkSufficiency = async () => {
    try {
      const mon = await AsyncStorage.getItem("MondayAM");
      const sun = await AsyncStorage.getItem("Sunday");

      if (mon != null && sun != null) {
        dispatch(setDataSufficiency(true));
      } else {
        dispatch(setDataSufficiency(false));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkSufficiency();
  });

  return (
    <View style={styles.priceAreaContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Current Price:"
        placeholderTextColor={primaryColors.darkgreen}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => setAsyncStoragePrice(price, date)}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  priceAreaContainer: {
    alignSelf: "stretch",
    marginTop: 10,
  },
  textInput: {
    width: 380,
    borderColor: primaryColors.darkgreen,
    borderBottomWidth: 5,
    padding: 5,
    paddingVertical: 10,
    marginBottom: 5,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
  },
  button: {
    backgroundColor: primaryColors.darkgreen,
    alignSelf: "center",
    alignItems: "center",
    width: 380,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "acnh",
    color: primaryColors.cream,
    fontSize: 20,
    paddingTop: 9,
  },
});
