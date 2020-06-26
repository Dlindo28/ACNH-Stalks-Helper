import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, SectionList, Text } from "react-native";

import { primaryColors } from "../models/Styles";

import TouchableButton from "./TouchableButton";

const data = [
  {
    title: "Insufficient Data",
    data: ["Data is insufficient..."],
  },
  {
    title: "Missing Prices",
    data: ["Missing Peices..."],
  },
  {
    title: "Price Trends",
    data: ["Change Later..."],
  },
];

const Warnings = ({ onClose }) => {
  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 30 }}>{section.title}</Text>
        )}
      />
      <TouchableButton
        onPress={onClose}
        color={primaryColors.cream}
        backgroundColor={primaryColors.darkgreen}
        text="Close"
      />
    </View>
  );
};

export default Warnings;
