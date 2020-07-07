/**
 * @file Build custom hooks for this app
 * @author Daniel Lindo
 */
import { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch } from "react-redux";
import { setDataSufficiency } from "../actions/dataSufficiencyActions";
import {
  setCurPrice,
  setYield,
  clearYield,
  setPricesMissing,
  setProjectedPeak,
} from "../actions/priceActions";

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

  /**
   * Updates price, tree, and yield of given day
   * @function setPrice
   * @param {string} price
   * @param {string} day
   * @returns {void}
   */
  const setPrice = async (price, day) => {
    try {
      // Place new price into AsyncStorage
      await AsyncStorage.setItem(day, price);

      updateYield();

      // Initialize or Update tree if data is sufficient
      const isSufficient = await checkSufficiency();
      if (isSufficient) {
        if (day == "Sunday" || day == "MondayAM") {
          await initTree();
        } else {
          await handleMissingPrices();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets ratio between MondayAM and Sunday prices
   * @function getRatio
   * @returns {number} ratio - MondayAM price / Sunday price
   */
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

  /**
   * Initializes price/pattern tree for a given ratio
   * @function initTree
   * @returns {void}
   */
  const initTree = async () => {
    try {
      const isSufficient = await checkSufficiency();
      if (isSufficient) {
        const ratio = await getRatio();

        let tree;
        if (ratio >= 0.91) {
          tree = Tree91;
        } else if (ratio >= 0.85) {
          tree = Tree85;
        } else if (ratio >= 0.8) {
          tree = Tree80;
        } else if (ratio >= 0.6) {
          tree = Tree60;
        } else {
          tree = Tree0;
        }

        tree = JSON.stringify(tree);
        await AsyncStorage.setItem("tree", tree);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets tree as JSON object from AsyncStorage
   * @function getTreeObject
   * @returns {Object.<string, *>} tree
   */
  const getTreeObject = async () => {
    try {
      let tree = await AsyncStorage.getItem("tree");
      tree = JSON.parse(tree);
      //console.log(tree);
      return tree;
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: Change to go through ALL days, not just Sun/MonAM
  /**
   * Checks sufficiency of week's data
   * @function checkSufficiency
   * @returns {boolean} - true iff Sunday and MondayAM prices are available
   */
  const checkSufficiency = async () => {
    try {
      const mon = await AsyncStorage.getItem("MondayAM");
      const sun = await AsyncStorage.getItem("Sunday");

      if (mon != "0" && sun != "0") {
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

  /**
   * Updates tree based on price increase/decrease
   * @function updateTree
   * @param {boolean} increase - true iff newest price is an increase
   * @returns {void}
   */
  const updateTree = async (increase, day) => {
    try {
      let tree = await getTreeObject();

      const updateProjectedPeak = (tree, day) => {
        const dayIndex = days.indexOf(day);
        if (tree.notes != null) {
          dispatch(
            setProjectedPeak(days[(dayIndex + tree.notes) % days.length])
          );
        } else if (tree.trends == ["R"]) {
          dispatch(setProjectedPeak("None"));
        }
      };

      if (increase) {
        if (tree.higher) {
          tree = tree.higher;
          console.log("tree increased");
          updateProjectedPeak(tree, day);
        }
      } else {
        if (tree.lower) {
          tree = tree.lower;
          console.log("tree decreased");
          updateProjectedPeak(tree, day);
        }
      }

      await AsyncStorage.setItem("tree", JSON.stringify(tree));
      console.log(tree);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Sets price change in price from Sunday to last input day
   * @function updateYield
   * @returns {Promise<void>}
   */
  const updateYield = async () => {
    const isSufficient = await checkSufficiency();
    const sundayPrice = await AsyncStorage.getItem("Sunday");

    // Going backwards, find the first nonzero price input and update yield
    for (let i = days.length - 1; i >= 0; i--) {
      const thisPrice = await AsyncStorage.getItem(days[i]);
      if (thisPrice != "0") {
        dispatch(setCurPrice(parseInt(thisPrice, 10)));
        if (isSufficient) {
          const change = Math.round(
            ((thisPrice - sundayPrice) / sundayPrice) * 100
          );
          dispatch(setYield(change));
        } else {
          dispatch(clearYield());
        }
        break;
      }
    }
  };

  /**
   * Iterates through days to find missing prices. Missing prices are
   * @function handleMissingPrices
   * @returns {void}
   */
  const handleMissingPrices = async () => {
    let priceMissing = false;
    let foundLast = null;
    let newPrice, lastPrice;
    let newDay;

    for (let i = days.length - 1; i >= 0; i--) {
      const day = days[i];
      const price = await AsyncStorage.getItem(day);
      if (day == "MondayAM") {
        lastPrice = price;
        break;
      }
      if (price == "0") {
        if (foundLast) {
          priceMissing = true;
          await updateTree(false, day);
        }
      } else {
        if (foundLast) {
          lastPrice = price;
          break;
        } else {
          newDay = day;
          newPrice = price;
          foundLast = true;
        }
      }
    }
    console.log(`Prev: ${lastPrice}, New: ${newPrice}`);
    await updateTree(parseInt(lastPrice, 10) < parseInt(newPrice, 10), newDay);
    dispatch(setPricesMissing(priceMissing));
  };

  /**
   * Logs everything stored in AsyncStorage
   * @function printStorage
   * @returns {Promise<void>}
   */
  const printStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const storage = await AsyncStorage.multiGet(keys);
      console.log(storage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkSufficiency();
  });

  return setPrice;
};
