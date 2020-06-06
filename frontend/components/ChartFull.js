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
  VictoryAxis,
} from "victory-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";

const data = [
  { date: "Sun", price: 16197 },
  { date: "Sun2", price: 16197 },
  { date: "Mon", price: 32010 },
  { date: "Mon2", price: 32010 },
  { date: "Tue", price: 26518 },
  { date: "Tue2", price: 26518 },
  { date: "Wed", price: 18606 },
  { date: "Wed2", price: 18606 },
  { date: "Thu", price: 16795 },
  { date: "Thu2", price: 16795 },
  { date: "Fri", price: 28607 },
  { date: "Fri2", price: 28607 },
  { date: "Sat", price: 23621 },
  { date: "Sat2", price: 23621 },
];

const RenderChart = () => {
  return (
    <View>
      <VictoryChart
        height={Dimensions.get("window").height / 3}
        width={Dimensions.get("window").width / 1.1}
      >
        <VictoryAxis
          fixLabelOverlap
          style={{
            tickLabels: { padding: 10 },
          }}
        />
        <VictoryAxis dependentAxis />
        <VictoryArea
          data={data}
          x="date"
          y="price"
          interpolation="natural"
          style={{
            data: {
              color: primaryColors.darkgreen,
              fill: primaryColors.islandgreen,
            },
          }}
        />
        <VictoryLine
          data={data}
          x="date"
          y="price"
          interpolation="natural"
          style={{
            data: {
              color: primaryColors.darkgreen,
            },
          }}
        />
        <VictoryScatter
          data={data}
          x="date"
          y="price"
          interpolation="natural"
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
