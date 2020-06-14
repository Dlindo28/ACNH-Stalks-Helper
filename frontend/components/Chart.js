import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-community/async-storage";
import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
  VictoryBar,
} from "victory-native";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";
import { getTreeObject } from "../hooks";

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

const typeNames = {
  R: "Random",
  BS: "Big Spike",
  SS: "Small Spike",
  D: "Constant Falling",
};

const Chart = ({ homeChart }) => {
  const [data, setData] = useState(tempdata);
  const [types, setTypes] = useState([]);
  const [dataEmpty, setDataEmpty] = useState(true);

  const listTypes =
    types.length == 0 ? (
      <Text
        key={"None"}
        style={{
          ...styles.typeText,
          color: secondaryColors.red,
        }}
      >
        Data Insufficient. No trends available.
      </Text>
    ) : (
      types.map((type) => (
        <Text key={type} style={styles.typeText}>
          {typeNames[type]}
        </Text>
      ))
    );

  const yAxis =
    homeChart || dataEmpty ? undefined : <VictoryAxis dependentAxis />;

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
    setDataEmpty(storeData.length == 0);

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
      (async () => {
        let tree = JSON.parse(await AsyncStorage.getItem("tree"));
        setTypes(tree != null ? tree.types : []);
      })();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <VictoryChart
        height={Dimensions.get("window").height / 3}
        width={Dimensions.get("window").width / 1.05}
        minDomain={{ y: 0 }}
        domainPadding={{ y: 10 }}
      >
        <VictoryAxis tickValues={days} tickFormat={tickFormat} />
        {yAxis}
        <VictoryBar
          data={data}
          x="date"
          y="price"
          interpolation="cardinal"
          style={{
            data: {
              color: primaryColors.darkgreen,
              fill: secondaryColors.rose,
            },
          }}
        />
      </VictoryChart>

      {homeChart ? undefined : (
        <Text
          style={{
            ...styles.typeText,
            fontSize: 20,
          }}
        >
          Likely Trends:
        </Text>
      )}
      {homeChart ? undefined : listTypes}
    </View>
  );
};

const styles = StyleSheet.create({
  typeText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    paddingLeft: 10,
  },
});

export default Chart;
