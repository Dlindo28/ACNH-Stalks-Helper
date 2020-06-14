import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useSelector, useDispatch } from "react-redux";
import { setYield, setCurPrice, clearYield } from "../actions/yieldActions";

import Chart from "./Chart";

import { primaryColors, secondaryColors } from "../models/Styles.js";
import { days } from "../models/Dates";

const ChartFull = () => {
  const dispatch = useDispatch();
  const curPrice = useSelector((store) => store.yield.curPrice);
  const _yield = useSelector((store) => store.yield.yield);
  const isSufficient = useSelector(
    (store) => store.dataSufficiency.sufficiency
  );

  const getYield = async () => {
    const sundayPrice = await AsyncStorage.getItem("Sunday");
    for (let i = days.length - 1; i >= 0; i--) {
      const thisPrice = await AsyncStorage.getItem(days[i]);
      if (thisPrice != null) {
        dispatch(setCurPrice(thisPrice));
        if (isSufficient) {
          const change = ((curPrice - sundayPrice) / sundayPrice) * 100;
          dispatch(setYield(Math.round(change)));
        } else {
          dispatch(clearYield());
        }
        break;
      }
    }
  };
  useEffect(() => {
    (async () => {
      await getYield();
    })();
  });
  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.chartContainer}>
          <Text style={styles.dataText}>
            Current Price: {curPrice.toString()}
            <Text
              style={{
                color: _yield < 0 ? secondaryColors.red : secondaryColors.green,
              }}
            >
              {" "}
              ({_yield.toString()}%)
            </Text>
          </Text>
          <Chart />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: primaryColors.cream,
    borderRadius: 10,
    height: Dimensions.get("window").height / 1.5,
    paddingTop: 15,
  },
  dataText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    marginLeft: 10,
  },
});

export default ChartFull;
