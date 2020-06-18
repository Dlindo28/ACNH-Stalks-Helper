/**
 * @file Builds price input area component for Home screen
 * @author Daniel Lindo
 */

import React, { useState } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import TouchableButton from "./TouchableButton";

import { useSelector } from "react-redux";
import { useSetPrice } from "../hooks";

import { getDay, getMeridian } from "../models/Dates";
import { primaryColors } from "../models/Styles";

/**
 * Home screen price input component
 * @function HomePriceEntry
 * @returns {JSX.Element}
 */
const HomePriceEntry = () => {
  const date = useSelector((state) => state.datetime.date);
  const [priceIn, setPriceIn] = useState();
  const setPrice = useSetPrice();

  return (
    <View style={styles.HomePriceEntryContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Current Price:"
        placeholderTextColor={primaryColors.darkgreen}
        keyboardType="numeric"
        onChangeText={(text) => setPriceIn(text)}
        onSubmitEditing={() => {
          if (priceIn != null)
            setPrice(priceIn, getDay(date) + getMeridian(date));
        }}
        returnKeyType="done"
      />
      <TouchableButton
        onPress={() => {
          if (priceIn != null)
            setPrice(priceIn, getDay(date) + getMeridian(date));
        }}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Enter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  HomePriceEntryContainer: {
    alignSelf: "stretch",
    marginTop: 10,
  },
  textInput: {
    width: Dimensions.get("window").width / 1.05,
    borderColor: primaryColors.darkgreen,
    borderBottomWidth: 3,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 15,
    padding: 5,
    paddingVertical: 10,
    marginBottom: 0,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
  },
});

export default HomePriceEntry;
