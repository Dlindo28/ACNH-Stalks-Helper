import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { day } from "../models/Dates.js";

const getDay = (date) => {
  return day[date.toDateString().split(" ")[0]];
};

const getMeridian = (date) => {
  let midday = new Date();
  midday.setHours(12);
  return date.getTime() < midday.getTime() ? "AM" : "PM";
};

const getHours = (date) => {
  let hour = date.getHours() % 12;
  return hour != 0 ? hour.toString() : "12";
};

const getMinutes = (date) => {
  let minutes = date.getMinutes();
  return minutes < 10 ? "0" + minutes.toString() : minutes.toString();
};

const DateHeader = () => {
  let d = new Date();
  const [date, setDate] = useState(d);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <View>
      <Text style={styles.dateText}>
        {getDay(date)} {getMeridian(date)}
      </Text>
      <Text style={styles.timeText}>
        {getHours(date)}:{getMinutes(date)}
        {getMeridian(date).toLowerCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    marginTop: 50,
  },
  dateText: {
    fontFamily: "acnh",
    fontSize: 20,
    alignSelf: "center",
  },
  timeText: {
    fontFamily: "acnh",
    fontSize: 15,
    alignSelf: "center",
  },
});

export default DateHeader;
