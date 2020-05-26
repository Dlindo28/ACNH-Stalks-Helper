import "react-native-gesture-handler";
import React, { useEffect, useRef } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo } from "@expo/vector-icons";
//import Swiper from "react-native-swiper";

import { primaryColors } from "./models/Styles.js";

import Home from "./screen/Home";
import Settings from "./screen/Settings";
import Help from "./screen/Help";

const Tab = createBottomTabNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  const { width } = Dimensions.get("window");

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor;
              switch (route.name) {
                case "Home":
                  iconName = "home";
                  iconColor = focused
                    ? primaryColors.islandgreen
                    : primaryColors.darkgreen;
                  break;
                case "Help":
                  iconName = "help";
                  iconColor = focused
                    ? primaryColors.islandgreen
                    : primaryColors.darkgreen;
                  break;
                case "Settings":
                  iconName = "cog";
                  iconColor = focused
                    ? primaryColors.islandgreen
                    : primaryColors.darkgreen;
                  break;
                default:
                  iconName = "home";
                  iconColor = focused
                    ? primaryColors.islandgreen
                    : primaryColors.darkgreen;
                  break;
              }
              return <Entypo name={iconName} color={iconColor} size={size} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: primaryColors.cream,
              shadowOpacity: 0.1,
              shadowRadius: 5,
              shadowOffset: {
                height: -1,
              },
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Help" component={Help} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;
