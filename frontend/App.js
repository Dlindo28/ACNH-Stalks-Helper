import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import { primaryColors } from "./models/Styles.js";

import Home from "./screen/Home";
import Settings from "./screen/Settings";
import Help from "./screen/Help";

const App = () => {
  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  const { width } = Dimensions.get("window");

  if (fontsLoaded) {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
        contentContainerStyle={{ backgroundColor: primaryColors.white }}
        showsHorizontalScrollIndicator
      >
        <View style={{ width, height: "100%" }}>
          <Help />
        </View>
        <View style={{ width, height: "100%" }}>
          <Home />
        </View>
        <View style={{ width, height: "100%" }}>
          <Settings />
        </View>
      </ScrollView>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;
