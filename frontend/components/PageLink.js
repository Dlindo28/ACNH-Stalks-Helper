import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { primaryColors } from "../models/Styles";

const Stack = createStackNavigator();

const PageLink = ({ link, navigation, move }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={move}>
        <View>
          <View style={styles.tab}></View>
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
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  tabText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    alignSelf: "center",
    marginTop: 2,
  },
  line: {
    backgroundColor: primaryColors.darkgreen,
    width: "100%",
    height: 1,
    opacity: 0.4,
    marginVertical: 5,
  },
});

export default PageLink;
