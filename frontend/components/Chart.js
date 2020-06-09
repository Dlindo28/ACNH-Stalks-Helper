import React, { useState, useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  VictoryArea,
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
  VictoryBar,
} from "victory-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

let tempdata = [
  { date: "Sunday", price: null },
  { date: "MondayAM", price: null },
  { date: "MondayPM", price: null },
  { date: "TuesdayAM", price: null },
  { date: "TuesdayPM", price: null },
  { date: "WednesdayAM", price: null },
  { date: "WednesdayPM", price: null },
  { date: "ThursdayAM", price: null },
  { date: "ThuesdayPM", price: null },
  { date: "FridayAM", price: null },
  { date: "FridayPM", price: null },
  { date: "SaturdayAM", price: null },
  { date: "SaturdayPM", price: null },
];

const tickFormat = [
  "S",
  "M",
  " ",
  "T",
  " ",
  "W",
  " ",
  "Th",
  " ",
  "F",
  " ",
  "S",
  " ",
];

const Chart = () => {
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
    //console.log(used);
    storeData.forEach((entry) => {
      used[entry[0]] = true;
      temp.push({
        date: entry[0],
        price: parseInt(entry[1], 10),
      });
    });
    //console.log(used);

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // maxPrice =
  return (
    <View>
      <VictoryChart
        height={Dimensions.get("window").height / 3}
        width={Dimensions.get("window").width / 1.1}
        animate={{ easing: "exp" }}
        minDomain={{ y: 0 }}
        domainPadding={{ y: 10 }}
      >
        <VictoryAxis tickValues={days} tickFormat={tickFormat} />
        <VictoryAxis dependentAxis />
        <VictoryBar
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
      </VictoryChart>
    </View>
  );
};

export default Chart;

/*
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
        */
