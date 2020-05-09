import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { primaryColors, fonts } from "../models/Styles.js";

export default function PriceArea() {
  const [price, setPrice] = useState(0);
  const priceInputHandler = (input) => {
    console.log("Price set: " + input);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.priceAreaContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Current Price:"
        placeholderTextColor={primaryColors.darkgreen}
        onChangeText={(text) => setPrice(Number(text))}
        keyboardType="numeric"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => priceInputHandler(price)}
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
    color: primaryColors.cream,
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
