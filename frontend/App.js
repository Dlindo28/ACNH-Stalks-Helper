import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Entypo } from "@expo/vector-icons";

import { primaryColors } from "./models/Styles.js";

import Home from "./screen/Home";
import Settings from "./screen/Settings";
import DataScreen from "./screen/DataScreen";
import Community from "./screen/Community";

import firebase from "firebase";
import { firebaseConfig } from "./config.js";

import { Provider, useSelector } from "react-redux";
import store from "./createStore";

/* If Firebase app not loaded, initialize from config */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createMaterialTopTabNavigator();

const AppBuilder = () => {
  const [firebaseLoggedIn, setFirebaseLoggedIn] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const isFirebaseLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setFirebaseLoggedIn(true);
        setFirebaseUser(user);
      } else {
      }
    });
  };

  const s = useSelector((state) => state);

  useEffect(() => {
    isFirebaseLoggedIn();
  });

  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

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
                case "Community":
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
              backgroundColor: primaryColors.white,
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
          <Tab.Screen
            name="Community"
            component={Community}
            firebaseUser={firebaseUser}
          />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <AppBuilder />
    </Provider>
  );
};
export default App;
