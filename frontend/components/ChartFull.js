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
  { date: "Sun", volume: 16197 },
  { date: "Sun2", volume: 16197 },
  { date: "Mon", volume: 32010 },
  { date: "Mon2", volume: 32010 },
  { date: "Tue", volume: 26518 },
  { date: "Tue2", volume: 26518 },
  { date: "Wed", volume: 18606 },
  { date: "Wed2", volume: 18606 },
  { date: "Thu", volume: 16795 },
  { date: "Thu2", volume: 16795 },
  { date: "Fri", volume: 28607 },
  { date: "Fri2", volume: 28607 },
  { date: "Sat", volume: 23621 },
  { date: "Sat2", volume: 23621 },
];

const RenderChart = () => {
  return (
    <View>
      <VictoryChart>
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
          y="volume"
          interpolation="natural"
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
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
          y="volume"
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
          x="date"
          y="volume"
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
