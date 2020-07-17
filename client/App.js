/**
 * @file Builds the base of the react app
 * @author Daniel Lindo
 */

import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";

import { Entypo } from "@expo/vector-icons";

import { primaryColors } from "./models/Styles.js";

import HomeScreen from "./screen/HomeScreen";
import DataScreen from "./screen/DataScreen";
import InfoScreen from "./screen/InfoScreen";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./createStore";

/** @const {JSX.Element} Tab - element used for creating Navbar */
const Tab = createMaterialTopTabNavigator();

/**
 * Builds App screens and Nav Bar component
 * @function AppBuilder
 * @returns {JSX.Element} - Base App components
 */
const AppBuilder = () => {
  /**
   * @const {boolean} fontsLoaded - imports ACNH font, returns true if load is complete
   * @default
   */
  const [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconColor = focused
                ? primaryColors.islandgreen
                : primaryColors.darkgreen;
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home";
                  break;
                case "Data":
                  iconName = "bar-graph";
                  break;
                case "Info":
                  iconName = "help-with-circle";
                  break;
                default:
                  iconName = "home";
                  break;
              }
              return <Entypo name={iconName} color={iconColor} size={20} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            tabStyle: {
              backgroundColor: primaryColors.cream,
              height: 70,
            },
            showIcon: true,
            pressOpacity: 1,
          }}
          tabBarPosition="bottom"
          swipeEnabled={true}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Data" component={DataScreen} />
          <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

/**
 * Wraps AppBuilder with redux store providers
 * @function App
 * @returns {*} - Redux Store Provider wrapping JSX
 */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppBuilder />
      </PersistGate>
    </Provider>
  );
};
export default App;
