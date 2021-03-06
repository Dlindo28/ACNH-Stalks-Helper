/**
 * @file Builds Home screen date header component
 * @author Daniel Lindo
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Constants from "expo-constants";

import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../actions/datetimeActions";

import { getDay, getHours, getMeridian, getMinutes } from "../models/Dates";

/**
 * Date header component
 * @function DateHeader
 * @returns {JSX.Element}
 */
const DateHeader = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.datetime.date);

  const [update, setUpdate] = useState(true);

  useEffect(() => {
    // Every second, dispatch new date object to redux state
    const interval = setInterval(() => {
      dispatch(setDate(new Date(Date.now())));
      setUpdate(!update);
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
    marginTop: Constants.stausBarHeight,
  },
  dateText: {
    fontFamily: "acnh",
    fontSize: wp("4.75%"),
    alignSelf: "center",
  },
  timeText: {
    fontFamily: "acnh",
    fontSize: wp("3.75%"),
    alignSelf: "center",
  },
});

export default DateHeader;
