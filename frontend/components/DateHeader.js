import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";

import { primaryColors, fonts } from "../models/Styles.js";
import { day } from "../models/Dates.js";

export default function DateHeader() {
  const [weekday, setDay] = useState("");
  const [meridian, setMeridian] = useState("");
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [timeLoaded, setTimeLoaded] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      setDay(day[d.toDateString().split(" ")[0]]);
      setMeridian(
        d.getTime() < new Date("December 23, 1995 12:00:00") ? "AM" : "PM"
      );
      setHour(d.getHours() % 12);
      setMinute(d.getMinutes());
    }, 1000);
    setTimeLoaded(true);
  });

  if (timeLoaded) {
    return (
      <View>
        <Text style={styles.dateText}>
          {weekday} {meridian}
        </Text>
        <Text style={styles.timeText}>
          {hour}:{minute < 10 ? "0" + minute.toString() : minute}
          {meridian.toLowerCase()}
        </Text>
      </View>
    );
  } else {
    return <AppLoafing />;
  }
}

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
