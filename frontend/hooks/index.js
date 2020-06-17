/**
 * @file Build custom hooks for this app
 * @author Daniel Lindo
 */
import { useEffect } from "react";
import { Keyboard, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { setDataSufficiency } from "../actions/dataSufficiencyActions";
import { useNotifications } from "./useNotifications";

import { Tree0, Tree60, Tree80, Tree85, Tree91 } from "../models/trees";
import { days } from "../models/Dates";

/**
 * Hook for setting price
 * @function useSetPrice
 * @returns {function} setPrice
 */
export const useSetPrice = () => {
  /** @const {Dispatch<any>} dispatch - redux dipatcher for data sufficiency */
  const dispatch = useDispatch();
  const sendNotification = useNotifications();

  const setPrice = async (price, day) => {
    try {
      await AsyncStorage.setItem(day, price);
      console.log(day + " price set to " + price);
      const isSufficient = await checkSufficiency();
      if (day == "Sunday" || day == "MondayAM") {
        if (isSufficient) {
          initTree();
        }
      } else {
        if (isSufficient) {
          let previousPrice = await AsyncStorage.getItem(
            days[days.indexOf(day) - 1]
          );
          updateTree(parseInt(previousPrice, 10) < parseInt(price, 10));
        }
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
          tree = Tree91;
          console.log("Tree initialized to Tree91");
        } else if (ratio >= 0.85) {
          tree = Tree85;
          console.log("Tree initialized to Tree85");
        } else if (ratio >= 0.8) {
          tree = Tree80;
          console.log("Tree initialized to Tree80");
        } else if (ratio >= 0.6) {
          tree = Tree60;
          console.log("Tree initialized to Tree60");
        } else {
          tree = Tree0;
          console.log("Tree initialized to Tree0");
        }

        tree = JSON.stringify(tree);
        await AsyncStorage.setItem("tree", tree);
        //getTreeObject();
      }
    } catch (e) {
      //handleMissingBuyPrice();
      console.log(e);
    }
  };

  const getTreeObject = async () => {
    try {
      let tree = await AsyncStorage.getItem("tree");
      tree = JSON.parse(tree);
      console.log(tree);
      return tree;
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: Change to go through ALL days, not just Sun/MonAM
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

  const updateTree = async (increase) => {
    try {
      let tree = await getTreeObject();
      if (increase) {
        if (tree.higher) {
          tree = tree.higher;
          console.log("tree increased");
        }
      } else {
        if (tree.lower) {
          tree = tree.lower;
          console.log("tree decreased");
        }
      }
      if (tree.notes) {
        //Alert.alert("Alert", tree.notes, [{ text: "OK" }]);
        sendNotification(tree.notes);
      }
      await AsyncStorage.setItem("tree", JSON.stringify(tree));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkSufficiency();
  });

  return setPrice;
};
