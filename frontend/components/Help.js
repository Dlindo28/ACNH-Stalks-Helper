import React, { useState } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

const Help = () => {
  return (
    <View style={styles.container}>
      <Text>Help</Text>
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

export default Help;
