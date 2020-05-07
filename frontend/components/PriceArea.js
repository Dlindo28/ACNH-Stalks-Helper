import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { primaryColors, fonts } from "../Styles.js";

export default function PriceArea() {
  const [price, setPrice] = useState(0);
  const priceInputHandler = (input) => {
    console.log("Price set: " + input);
  };
  return (
    <View style={styles.priceAreaContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Today's Price"
        onChangeText={(text) => setPrice(Number(text))}
      />
      <Button
        color={colors.darkgreen}
        title="Enter"
        onPress={() => priceInputHandler(price)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: primaryColors.darkgreen,
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    textAlign: "center",
    alignSelf: "center",
  },
  priceAreaContainer: {
    alignSelf: "stretch",
  },
});
