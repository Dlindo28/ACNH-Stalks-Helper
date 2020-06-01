import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../actions/datetimeActions";

import {
  day,
  getDay,
  getHours,
  getMeridian,
  getMinutes,
} from "../models/Dates";

const DateHeader = () => {
  const date = useSelector((state) => state.datetime.date);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      date.setSeconds(date.getSeconds() + 60);
      dispatch(setDate(date));
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
