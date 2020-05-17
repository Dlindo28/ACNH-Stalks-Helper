import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home.js";
import Settings from "./components/Settings.js";
import Help from "./components/Help.js";

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;
