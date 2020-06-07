import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useSetPrice } from "../hooks";

import TouchableButton from "./TouchableButton";

import { primaryColors, secondaryColors } from "../models/Styles";

const PriceEntryRow = ({ day }) => {
  const setPrice = useSetPrice();
  return (
    <View>
      <Text>{day}</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{ marginRight: 10, borderBottomWidth: 1 }}
          placeholder="AM"
          placeholderTextColor={primaryColors.darkgreen}
          onSubmitEditing={(e) => setPrice(e.nativeEvent.text, day, "AM")}
          keyboardType="numeric"
          returnKeyType="done"
        />
        <TextInput
          style={{ marginRight: 10, borderBottomWidth: 1 }}
          placeholder="PM"
          placeholderTextColor={primaryColors.darkgreen}
          onSubmitEditing={(e) => setPrice(e.nativeEvent.text, day, "PM")}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

const FullPriceEntry = ({ setModalVisible }) => {
  const setPrice = useSetPrice();

  const handleConfirm = () => {
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
        text="Confirm"
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
