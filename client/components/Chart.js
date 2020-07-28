/**
 * @file Build chart that represents price data
 * @author Daniel Lindo
 */

import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { VictoryChart, VictoryAxis, VictoryBar } from "victory-native";
import { useSelector } from "react-redux";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

/** @const {Object.<string, number>[]} - initial chart data */
const tempdata = [
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

/** @const {string[]} - x-axis tick formatting */
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

/** @const {Object.<string, string>} - decoded names of trend types */
const decodeTrend = {
  R: "Random",
  BS: "Big Spike",
  SS: "Small Spike",
  D: "Constant Falling",
};

/**
 * Builds Chart component
 * @function Chart
 * @param {boolean} homeChart - true if chart is on Home screen
 * @returns {JSX.Element}
 */
const Chart = ({ homeChart }) => {
  const [data, setData] = useState(tempdata);
  const [yAxis, setAxis] = useState(false);
  const [trends, setTrends] = useState([]);

  const projectedPeak = useSelector((store) => store.prices.projectedPeak);

  /** @const {JSX.Element} - text list of each trend */
  const listTrends =
    trends.length == 0 ? (
      <Text
        key={"None"}
        style={{
          ...styles.trendText,
          color: secondaryColors.red,
        }}
      >
        Data Insufficient. No trends available.
      </Text>
    ) : (
      trends.map((trend) => (
        <Text key={trend} style={styles.trendText}>
          {decodeTrend[trend]}
        </Text>
      ))
    );

  /**
   * Gets price data from AsyncStorage
   * @function getData
   * @returns {Promise<[string, string][]>}
   */
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

  /**
   * updates state data from AsyncStorage
   * @function updatePrice
   * @returns {Promise<void>}
   */
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
      }
    });

    setData(temp);
    setAxis(temp.filter((data) => data.price !== 0).length > 0);
  };

  useEffect(() => {
    // Every second, update state price and trends
    const interval = setInterval(() => {
      updatePrice();
      (async () => {
        let tree = JSON.parse(await AsyncStorage.getItem("tree"));
        setTrends(tree != null ? tree.trends : []);
      })();
    }, 1000);

    // clear interval when component unmounts
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
        {yAxis ? <VictoryAxis dependentAxis /> : undefined}
        <VictoryBar
          data={data}
          x="date"
          y="price"
          interpolation="cardinal"
          style={{
            data: {
              color: primaryColors.darkgreen,
              fill: primaryColors.darkgreen,
            },
          }}
        />
      </VictoryChart>

      {homeChart ? undefined : (
        <Text
          style={{
            ...styles.trendText,
            fontSize: wp("4.75%"),
          }}
        >
          Likely Trends:
        </Text>
      )}
      {homeChart ? undefined : listTrends}

      {homeChart ? undefined : (
        <View>
          <Text
            style={{
              ...styles.trendText,
              fontSize: wp("4.75%"),
            }}
          >
            Projected Peak:
            <Text
              style={{
                ...styles.trendText,
                fontSize: wp("4.75%"),
                color: secondaryColors.red,
              }}
            >
              {" " + projectedPeak}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trendText: {
    fontFamily: "acnh",
    fontSize: wp("3.75%"),
    color: primaryColors.darkgreen,
    paddingLeft: 10,
  },
});

export default Chart;
