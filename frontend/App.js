import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { primaryColors, fonts } from "./models/Styles.js";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import PriceArea from "./components/PriceArea.js";
import DateHeader from "./components/DateHeader.js";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  if (fontsLoaded) {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <DateHeader />
          <PriceArea />
        </View>
      </DismissKeyboard>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    alignItems: "center",
    paddingTop: 50,
  },
});
