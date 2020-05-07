import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { primaryColors, fonts } from "./Styles.js";

import PriceArea from "./components/PriceArea.js";

export default function App() {
  return (
    <View style={styles.container}>
      <PriceArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    alignItems: "center",
  },
});
