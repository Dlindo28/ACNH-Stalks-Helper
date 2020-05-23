import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//import { ListPicker } from "react-native-ultimate-modal-picker";

const DateSetting = (date) => {
  return (
    <TouchableOpacity>
      <SafeAreaView>
        <View style={styles.settingsItem}></View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingsItem: {
    height: 50,
    justifyContent: "center",
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default DateSetting;
