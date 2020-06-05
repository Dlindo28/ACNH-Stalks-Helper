import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Dimensions,
} from "react-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import ChartFull from "../components/ChartFull";
const DataScreen = () => {
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
      console.log("items removed");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <ChartFull />
      <TouchableOpacity activeOpacity={0.6} onPress={() => editPrices()}>
        <View
          style={{
            ...styles.button,
            backgroundColor: primaryColors.darkgreen,
            color: primaryColors.cream,
          }}
        >
          <Text style={styles.buttonText}>Edit Prices</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => resetPrices()}>
        <View style={styles.button}>
          <Text
            style={{
              ...styles.buttonText,
              color: primaryColors.darkgreen,
            }}
          >
            Reset Prices
          </Text>
        </View>
      </TouchableOpacity>
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
