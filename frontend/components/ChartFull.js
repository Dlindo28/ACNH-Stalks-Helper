import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import {
  VictoryArea,
  VictoryChart,
  VictoryScatter,
  VictoryLine,
} from "victory-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";

const data = [
  { day: "Sun", price: 109 },
  { day: "Mon", price: 88 },
  { day: "Tue", price: 90 },
  { day: "Wed", price: 55 },
  { day: "Thu", price: 60 },
  { day: "Fri", price: 114 },
  { day: "Sat", price: 100 },
];

const RenderChart = () => {
  return (
    <View>
      <VictoryChart
        maxDomain={{
          y: 150,
        }}
        minDomain={{
          y: 0,
        }}
      >
        <VictoryArea
          data={data}
          x="day"
          y="price"
          interpolation="natural"
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
          style={{
            data: {
              color: primaryColors.darkgreen,
              fill: secondaryColors.rose,
            },
          }}
        />
        <VictoryLine
          data={data}
          x="day"
          y="price"
          interpolation="natural"
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
          style={{
            data: {
              color: primaryColors.darkgreen,
            },
          }}
        />
        <VictoryScatter
          data={data}
          x="day"
          y="price"
          interpolation="natural"
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
          size={5}
          style={{
            data: {
              fill: primaryColors.darkgreen,
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

const ChartFull = () => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.chartContainer}>
          <RenderChart />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: primaryColors.cream,
    borderRadius: 10,
    height: Dimensions.get("window").height / 1.5,
    paddingTop: 15,
  },
});

export default ChartFull;
