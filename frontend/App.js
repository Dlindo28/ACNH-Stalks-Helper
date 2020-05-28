import "react-native-gesture-handler";
import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Entypo } from "@expo/vector-icons";
//import Swiper from "react-native-swiper";

import { primaryColors } from "./models/Styles.js";

import Home from "./screen/Home";
import Settings from "./screen/Settings";
import Login from "./screen/Login";
import DataScreen from "./screen/DataScreen";

import firebase from "firebase";
import { firebaseConfig } from "./config.js";
import { useSafeArea } from "react-native-safe-area-context";

/* If Firebase app not loaded, initialize from config */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const isLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
      }
    });
  };
  useEffect(() => {
    isLoggedIn();
  });

  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  const { width } = Dimensions.get("window");

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconColor;
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home";
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
                case "Login":
                  iconName = "chat";
                  iconColor = focused
                    ? primaryColors.islandgreen
                    : primaryColors.darkgreen;
                  break;
                case "Data":
                  iconName = "bar-graph";
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
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Data" component={DataScreen} />
          <Tab.Screen name="Login" component={Login} user={user} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;
