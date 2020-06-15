/**
 * @file Builds component for Error/Warning badge components
 * @author Daniel Lindo
 */

import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { primaryColors, secondaryColors } from "../models/Styles";

import { useSelector } from "react-redux";

/**
 * Error Badge component
 * @function ErrorBadge
 * @returns {JSX.Element}
 */
const ErrorBadge = () => {
  const dataSufficiency = useSelector(
    (state) => state.dataSufficiency.sufficiency
  );

  if (!dataSufficiency) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Entypo
            name="warning"
            color={primaryColors.darkgreen}
            size={20}
            style={{ justifyContent: "center", paddingTop: 5, marginRight: 5 }}
          />
          <Text style={styles.badgeText}>Insuffient Data</Text>
        </View>
      </View>
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
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  badgeText: {
    color: primaryColors.darkgreen,
    fontFamily: "acnh",
    paddingTop: 9,
  },
});

export default ErrorBadge;
