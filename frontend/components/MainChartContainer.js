/**
 * @file Builds container for main chart in Data Screen
 * @author Daniel Lindo
 */

import React, { useEffect } from "react";
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

/**
 * Container for Chart with yield, current price, and trends
 * @function MainChartContainer
 * @returns {JSX.Element}
 */
const MainChartContainer = () => {
  /** @const {Dispatch<any>} dispatch - redux dipatcher for yield, curPrice */
  const dispatch = useDispatch();

  const curPrice = useSelector((store) => store.yield.curPrice);
  const curYield = useSelector((store) => store.yield.yield);
  const isSufficient = useSelector(
    (store) => store.dataSufficiency.sufficiency
  );

  /**
   * Sets price change in price from Sunday to last input day
   * @function updateYield
   * @returns {Promise<void>}
   */
  const updateYield = async () => {
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
      await updateYield();
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
                color:
                  curYield < 0 ? secondaryColors.red : secondaryColors.green,
              }}
            >
              {" "}
              ({curYield.toString()}%)
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
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  dataText: {
    fontFamily: "acnh",
    color: primaryColors.darkgreen,
    marginLeft: 10,
  },
});

export default MainChartContainer;
