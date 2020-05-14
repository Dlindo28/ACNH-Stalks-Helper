import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { setDetectionImagesAsync } from "expo/build/AR";

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
