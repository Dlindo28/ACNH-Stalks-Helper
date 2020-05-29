import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { primaryColors } from "../models/Styles.js";

const DateTimeSetter = () => {
  const [newDate, setNewDate] = useState(new Date());
  const handleChange = (e, selectedDate) => {
    setNewDate(selectedDate);
  };

  if (Platform.OS == "ios") {
    return (
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={newDate}
          mode="datetime"
          onChange={(e, d) => handleChange(e, d)}
        />
        <Text>{newDate.toString()}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Android</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default DateTimeSetter;
