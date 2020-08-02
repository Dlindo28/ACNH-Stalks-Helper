/**
 * @file Builds component for Error/Warning badge components
 * @author Daniel Lindo
 */

import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, shallowEqual } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { primaryColors, secondaryColors } from "../models/Styles";

import TouchableButton from "./TouchableButton";

const warningIcon = (
  <Entypo
    name="warning"
    color={primaryColors.darkgreen}
    size={hp("2.4%")}
    style={{
      justifyContent: "center",
      marginRight: 5,
    }}
  />
);

/**
 * Error Badge component
 * @function ErrorBadge
 * @returns {JSX.Element}
 */
const ErrorBadge = ({ navigation }) => {
  const dataSufficiency = useSelector(
    (store) => store.dataSufficiency.sufficiency,
    shallowEqual
  );
  const pricesMissing = useSelector(
    (store) => store.prices.pricesMissing,
    shallowEqual
  );

  const [warnings, setWarnings] = useState(
    !dataSufficiency && pricesMissing
      ? "2 Warnings"
      : !dataSufficiency
      ? "Insufficient Data"
      : pricesMissing
      ? "Missing Prices"
      : ""
  );

  useLayoutEffect(() => {
    setWarnings(
      !dataSufficiency && pricesMissing
        ? "2 Warnings"
        : !dataSufficiency
        ? "Insufficient Data"
        : pricesMissing
        ? "Missing Prices"
        : ""
    );
  }, [dataSufficiency, pricesMissing]);

  if (warnings != "") {
    return (
      <TouchableButton
        onPress={() => navigation.navigate("Info")}
        color={primaryColors.darkgreen}
        backgroundColor={secondaryColors.rose}
        text={warnings}
        icon={warningIcon}
      />
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColors.rose,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 1.05,
    height: hp("6%"),
    borderRadius: 10,
    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 3,
  },
  badgeText: {
    color: primaryColors.darkgreen,
    fontFamily: "acnh",
    paddingTop: 9,
  },
});

export default ErrorBadge;
