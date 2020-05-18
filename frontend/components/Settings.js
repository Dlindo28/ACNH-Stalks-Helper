import React, { useState } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
