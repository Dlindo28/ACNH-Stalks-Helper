/**
 * @file Builds container for main chart in Data Screen
 * @author Daniel Lindo
 */

import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useSelector } from "react-redux";

import Chart from "./Chart";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

/**
 * Container for Chart with yield, current price, and trends
 * @function MainChartContainer
 * @returns {JSX.Element}
 */
const MainChartContainer = () => {
  const curPrice = useSelector((store) => store.prices.curPrice);
  const curYield = useSelector((store) => store.prices.yield);

  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.chartContainer}>
          <Text style={styles.dataText}>
            Current Price: {curPrice.toString()}
            <Text
              style={{
                color:
                  curYield < 0 ? secondaryColors.red : secondaryColors.green,
              }}
            >
              {" "}
              ({curYield.toString()}%)
            </Text>
          </Text>
          <Chart />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: primaryColors.cream,
    borderRadius: 10,
    height: Dimensions.get("window").height / 1.6,
    paddingTop: 15,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 3,
  },
  dataText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    marginLeft: 10,
  },
});

export default MainChartContainer;
