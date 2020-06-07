import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import TouchableButton from "./TouchableButton";

import { useSelector } from "react-redux";
import { useSetPrice } from "../hooks";

import { getDay, getMeridian } from "../models/Dates";
import { primaryColors } from "../models/Styles";

export default function PriceArea() {
  const date = useSelector((state) => state.datetime.date);
  const [priceIn, setPriceIn] = useState();
  const setPrice = useSetPrice();
  return (
    <View style={styles.priceAreaContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Current Price:"
        placeholderTextColor={primaryColors.darkgreen}
        keyboardType="numeric"
        onChangeText={(text) => setPriceIn(text)}
        onSubmitEditing={(e) =>
          setPrice(e.nativeEvent.text, getDay(date), getMeridian(date))
        }
        returnKeyType="done"
      />
      <TouchableButton
        onPress={() => setPrice(priceIn, getDay(date), getMeridian(date))}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Enter"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  priceAreaContainer: {
    alignSelf: "stretch",
    marginTop: 10,
  },
  textInput: {
    width: Dimensions.get("window").width / 1.1,
    borderColor: primaryColors.darkgreen,
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 10,
    marginBottom: 0,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
  },
});
