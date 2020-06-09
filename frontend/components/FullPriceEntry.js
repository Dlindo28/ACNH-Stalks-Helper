import React, { useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useSetPrice } from "../hooks";
import AsyncStorage from "@react-native-community/async-storage";

import TouchableButton from "./TouchableButton";

import { primaryColors } from "../models/Styles";

const buffer = {};

const getPrice = async (day) => {
  const price = await AsyncStorage.getItem(day);
  return price != null ? price : "0";
};

const PriceEntryRow = ({ day }) => {
  const setPrice = useSetPrice();

  return (
    <View>
      <Text>{day}</Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{ marginRight: 10, borderBottomWidth: 1 }}
          placeholder={day + "AM"}
          placeholderTextColor={primaryColors.darkgreen}
          onSubmitEditing={(e) => setPrice(e.nativeEvent.text, day + "AM")}
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(price) => {
            buffer[day + "AM"] = price;
          }}
        />
        <TextInput
          style={{ marginRight: 10, borderBottomWidth: 1 }}
          placeholder={day + "PM"}
          placeholderTextColor={primaryColors.darkgreen}
          onSubmitEditing={(e) => setPrice(e.nativeEvent.text, day + "PM")}
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(price) => {
            buffer[day + "PM"] = price;
          }}
        />
      </View>
    </View>
  );
};

const FullPriceEntry = ({ setModalVisible }) => {
  const setPrice = useSetPrice();

  const handleConfirm = () => {
    for (let entry in buffer) {
      setPrice(buffer[entry], entry);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Sunday</Text>
      <TextInput
        style={{}}
        placeholder="Sunday"
        placeholderTextColor={primaryColors.darkgreen}
        onSubmitEditing={(e) => setPrice(e.nativeEvent.text, "Sunday")}
        keyboardType="numeric"
        returnKeyType="done"
        onChangeText={(price) => {
          buffer["Sunday"] = price;
        }}
      />
      <PriceEntryRow day="Monday" />
      <PriceEntryRow day="Tuesday" />
      <PriceEntryRow day="Wednesday" />
      <PriceEntryRow day="Thursday" />
      <PriceEntryRow day="Friday" />
      <PriceEntryRow day="Saturday" />
      <TouchableButton
        onPress={handleConfirm}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Close"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    paddingTop: 50,
    alignItems: "center",
  },
});

export default FullPriceEntry;
