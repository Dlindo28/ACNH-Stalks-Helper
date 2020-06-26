import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, SectionList, Text } from "react-native";

import { primaryColors } from "../models/Styles";

import TouchableButton from "./TouchableButton";

const data = [
  {
    title: "Buying Turnips",
    data: [
      "Each Sunday, Daisy Mae will visit your island to sell turnips. " +
        "Buy from her and you may win big on bells later in the week!\n" +
        "Turnip prices change twice every day, once at 4 am and again at 12 pm.",
    ],
  },
  {
    title: "Entering Prices",
    data: [
      "You can enter current prices on the home screen, or edit prices for " +
        "the whole week on the chart screen.\nSunday and Monday AM prices are " +
        "mandatory for an accurate estimation",
    ],
  },
  {
    title: "Price Trends",
    data: ["Change Later..."],
  },
];

const Instructions = ({ onClose }) => {
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

export default Instructions;
