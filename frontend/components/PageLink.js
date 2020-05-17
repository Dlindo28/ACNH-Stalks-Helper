import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { primaryColors } from "../models/Styles.js";

const Stack = createStackNavigator();

const PageLink = ({ link, navigation, move }) => {
  let imgPath = "";
  if (link == "Settings") {
    imgPath = require("../assets/images/Fossil.png");
  } else if (link == "Help") {
    imgPath = require("../assets/images/Peach.png");
  } else if (link == "Login") {
    imgPath = require("../assets/images/Bells.png");
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={move}>
        <View>
          <View style={styles.tab}>
            <Image source={imgPath} style={styles.tabImg} />
          </View>
          <Text style={styles.tabText}>{link}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", marginTop: 2 },
  tab: {
    backgroundColor: primaryColors.islandyellow,
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  tabText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    alignSelf: "center",
  },
  tabImg: {
    alignSelf: "center",
    width: 35,
    height: 35,
  },
});

export default PageLink;
