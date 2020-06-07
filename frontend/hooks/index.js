import { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch } from "react-redux";
import { setDataSufficiency } from "../actions/dataSufficiencyActions";

export const useSetPrice = () => {
  const dispatch = useDispatch();

  const setAsyncStoragePrice = async (price, day, meridian) => {
    try {
      const key = day != "Sunday" ? day + meridian : day;
      await AsyncStorage.setItem(key, price);
      console.log("Price on " + key + " set to " + price + "!");
      if (key == "MondayAM") {
        setAsyncStorageTypes();
      }
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  const setAsyncStorageTypes = async () => {
    try {
      const sundayPrice = await AsyncStorage.getItem("Sunday");
      const modayPrice = await AsyncStorage.getItem("MondayAM");
      const ratio = Number(modayPrice) / Number(sundayPrice);
      console.log(ratio);
      checkSufficiency();
    } catch (e) {
      //handleMissingBuyPrice();
      console.log(e);
    }
  };

  const checkSufficiency = async () => {
    try {
      const mon = await AsyncStorage.getItem("MondayAM");
      const sun = await AsyncStorage.getItem("Sunday");

      if (mon != null && sun != null) {
        dispatch(setDataSufficiency(true));
      } else {
        dispatch(setDataSufficiency(false));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkSufficiency();
  });

  return setAsyncStoragePrice;
};
