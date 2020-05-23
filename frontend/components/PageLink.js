import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
} from "react-native";
import { primaryColors, fonts } from "../models/Styles.js";

const PageLink = ({ link }) => {
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
      <TouchableHighlight>
        <View style={styles.tab}>
          <View style={styles.line} />
          <Text>{link}</Text>
          <View style={styles.line} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 2,
    //borderWidth: 1,
  },
  tab: {
    width: 300,
    alignItems: "center",
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
