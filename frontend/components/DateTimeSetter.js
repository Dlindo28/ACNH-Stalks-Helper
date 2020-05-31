import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { setDate, setTime } from "../actions/datetimeActions";
import { useDispatch, useSelector } from "react-redux";

const DateTimeSetter = () => {
  const dispatch = useDispatch();
  const [tempDate, setTempDate] = useState(new Date());

  if (Platform.OS == "ios") {
    return (
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={tempDate}
          mode="datetime"
          onChange={(e, d) => {
            setTempDate(d);
          }}
        />
        <Button title="Enter" onPress={() => dispatch(setDate(tempDate))} />
        <Button
          title="Reset"
          onPress={() => dispatch(setDate(new Date()))}
          color="red"
        />
        <Text>{}</Text>
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

export default DateTimeSetter;
