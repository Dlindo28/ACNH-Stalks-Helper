import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
} from "victory-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

let tempdata = [
  { date: "Sunday", price: 0 },
  { date: "MondayAM", price: 0 },
  { date: "MondayPM", price: 0 },
  { date: "TuesdayAM", price: 0 },
  { date: "TuesdayPM", price: 0 },
  { date: "WednesdayAM", price: 0 },
  { date: "WednesdayPM", price: 0 },
  { date: "ThursdayAM", price: 0 },
  { date: "ThuesdayPM", price: 0 },
  { date: "FridayAM", price: 0 },
  { date: "FridayPM", price: 0 },
  { date: "SaturdayAM", price: 0 },
  { date: "SaturdayPM", price: 0 },
];

const tickFormat = [
  "S",
  "M",
  " ",
  "T",
  " ",
  "W",
  " ",
  "T",
  " ",
  "F",
  " ",
  "S",
  " ",
];

const Chart = ({ removeYAxis }) => {
  const [data, setData] = useState(tempdata);

  const getData = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      let storage = await AsyncStorage.multiGet(keys);
      let res = storage.filter((el) => days.includes(el[0]));
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const updatePrice = async () => {
    const storeData = await getData();

    let temp = [];

    let used = {};
    days.forEach((day) => {
      used[day] = false;
    });

    storeData.forEach((entry) => {
      used[entry[0]] = true;
      temp.push({
        date: entry[0],
        price: parseInt(entry[1], 10),
      });
    });

    days.forEach((day) => {
      if (!used[day]) {
        temp.push({
          date: day,
          price: 0,
        });
      } else {
      }
    });

    setData(temp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updatePrice();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!removeYAxis) {
    return (
      <View>
        <VictoryChart
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
          minDomain={{ y: 0 }}
          domainPadding={{ y: 10 }}
        >
          <VictoryAxis tickValues={days} tickFormat={tickFormat} />
          <VictoryAxis dependentAxis />
          <VictoryLine
            data={data}
            x="date"
            y="price"
            interpolation="cardinal"
            style={styles.graph}
          />
        </VictoryChart>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <VictoryChart
          height={Dimensions.get("window").height / 3}
          width={Dimensions.get("window").width / 1.1}
          minDomain={{ y: 0 }}
          domainPadding={{ y: 10 }}
        >
          <VictoryAxis tickValues={days} tickFormat={tickFormat} />
          <VictoryLine
            data={data}
            x="date"
            y="price"
            interpolation="cardinal"
            style={styles.graph}
          />
        </VictoryChart>
      </View>
    );
  }
};

const styles = {
  graph: {
    data: {
      color: primaryColors.darkgreen,
      fill: secondaryColors.rose,
    },
  },
};

export default Chart;
