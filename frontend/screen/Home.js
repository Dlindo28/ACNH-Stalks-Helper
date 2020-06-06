import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Text,
} from "react-native";

import { primaryColors } from "../models/Styles";

import PriceArea from "../components/PriceArea";
import DateHeader from "../components/DateHeader";
import ChartPanel from "../components/ChartPanel";
import ErrorBadge from "../components/ErrorBadge";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Home = () => {
  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <DateHeader />
          <PriceArea />
          <ChartPanel />
          <ErrorBadge />
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    alignItems: "center",
    paddingTop: 50,
  },
  blurredImage: {
    width: 192,
    height: 192,
  },
  EGcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nonBlurredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  pageButtons: {
    flex: 1,
    marginTop: 2,
    width: "100%",
    flexDirection: "row",
  },
});

export default Home;
