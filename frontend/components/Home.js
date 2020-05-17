import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
  TouchableHighlight,
} from "react-native";
import { BlurView } from "expo-blur";
import { createStackNavigator } from "@react-navigation/stack";

import { primaryColors, fonts } from "../models/Styles.js";

import PriceArea from "./PriceArea.js";
import DateHeader from "./DateHeader.js";
import ChartPanel from "./ChartPanel.js";
import PageLink from "./PageLink.js";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const [panelIsOpen, setPanel] = useState(false);
  const setPanelState = (panelState) => {
    setPanel(panelState);
  };
  if (!panelIsOpen) {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <DateHeader />
          <PriceArea />
          <ChartPanel setPanelState={setPanelState} panelIsOpen={panelIsOpen} />
          <View style={styles.pageButtons}>
            <PageLink
              link="Settings"
              move={() => navigation.navigate("Settings")}
            />
            <PageLink link="Help" move={() => navigation.navigate("Help")} />
            <PageLink link="Login" />
          </View>
        </View>
      </DismissKeyboard>
    );
  } else {
    return (
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <TouchableHighlight>
              <View>
                <DateHeader />
                <PriceArea />
                <View style={styles.pageButtons}>
                  <PageLink link="Settings" />
                  <PageLink link="Help" />
                  <PageLink link="Login" />
                </View>
              </View>
            </TouchableHighlight>

            {/* Adjust the tint and intensity */}
            <BlurView
              intensity={90}
              style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
            >
              <View>
                <ChartPanel
                  setPanelState={setPanelState}
                  panelIsOpen={panelIsOpen}
                />
              </View>
            </BlurView>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
});

export default Home;
