import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { BlurView } from "expo-blur";
import { createStackNavigator } from "@react-navigation/stack";

import { primaryColors } from "../models/Styles";

import PriceArea from "../components/PriceArea";
import DateHeader from "../components/DateHeader";
import ChartPanel from "../components/ChartPanel";

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
    marginTop: 2,
    width: "100%",
    flexDirection: "row",
  },
});

export default Home;
