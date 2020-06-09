import { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch } from "react-redux";
import { setDataSufficiency } from "../actions/dataSufficiencyActions";

import { Tree0, Tree60, Tree80, Tree85, Tree91 } from "../models/trees";

export const useSetPrice = () => {
  /* Setup redux dispatcher */
  const dispatch = useDispatch();

  /* setPrice()  */
  const setPrice = async (price, day) => {
    try {
      await AsyncStorage.setItem(day, price);
      console.log(day + " price set to " + price);

      if (day == "MondayAM") {
        initTree();
      } else if (day != "Sunday") {
        let tree = await AsyncStorage.getItem("tree");

        tree = JSON.parse(tree);
        //updateTree(tree);
      }
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  const getRatio = async () => {
    try {
      const sundayPrice = await AsyncStorage.getItem("Sunday");
      const modayPrice = await AsyncStorage.getItem("MondayAM");
      const ratio = Number(modayPrice) / Number(sundayPrice);
      return ratio;
    } catch (e) {
      console.log(e);
    }
  };

  const initTree = async () => {
    try {
      const isSufficient = await checkSufficiency();
      if (isSufficient) {
        const ratio = await getRatio();
        console.log("Ratio: " + ratio);

        let tree;
        if (ratio >= 0.91) {
          console.log("Tree set to 91");
          tree = Tree91;
        } else if (ratio >= 0.85) {
          console.log("Tree set to 85");
          tree = Tree85;
        } else if (ratio >= 0.8) {
          console.log("Tree set to 80");
          tree = Tree80;
        } else if (ratio >= 0.6) {
          console.log("Tree set to 60");
          tree = Tree60;
        } else {
          console.log("Tree set to 0");
          tree = Tree0;
        }

        tree = JSON.stringify(tree);
        await AsyncStorage.setItem("tree", tree);
      }
    } catch (e) {
      //handleMissingBuyPrice();
      console.log(e);
    }
  };

  /* Change to go through ALL days, not just Sun/MonAM */
  const checkSufficiency = async () => {
    try {
      const mon = await AsyncStorage.getItem("MondayAM");
      const sun = await AsyncStorage.getItem("Sunday");

      if (mon != null && sun != null) {
        dispatch(setDataSufficiency(true));
        return true;
      } else {
        dispatch(setDataSufficiency(false));
        return false;
      }

      /*
      
      if (sun == null) {
        dispatch(setDataSufficiency(fale));
        return false;
      } else {
        
      }
      
      */
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkSufficiency();
  });

  return setPrice;
};
