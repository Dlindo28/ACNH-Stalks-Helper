import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TextInput, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useSetPrice } from "../hooks";
import AsyncStorage from "@react-native-community/async-storage";

import TouchableButton from "./TouchableButton";

import { primaryColors } from "../models/Styles";
import { setPriceInput } from "../actions/priceInputActions";

const getPrice = async (day) => {
  const price = await AsyncStorage.getItem(day);
  return price != null ? price : "0";
};

const PricedayRow = ({ day }) => {
  const setPrice = useSetPrice();
  const [amPrice, setAmPrice] = useState();
  const [pmPrice, setPmPrice] = useState();
  useEffect(() => {
    (async () => {
      setAmPrice(await getPrice(`${day}AM`));
      setPmPrice(await getPrice(`${day}PM`));
    })();
  }, []);

  return (
    <View>
      <Text style={styles.rowHeader}>{day}</Text>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.rowInput}
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={(e) =>
            e.nativeEvent.text != undefined
              ? setPrice(e.nativeEvent.text, `${day}AM`)
              : undefined
          }
          placeholder={amPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
        <TextInput
          style={styles.rowInput}
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={(e) =>
            e.nativeEvent.text != undefined
              ? setPrice(e.nativeEvent.text, `${day}PM`)
              : undefined
          }
          placeholder={pmPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
      </View>
    </View>
  );
};

const FullPriceday = ({ setModalVisible }) => {
  const setPrice = useSetPrice();
  const [sunPrice, setSunPrice] = useState();

  const handleConfirm = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      setSunPrice(await getPrice("Sunday"));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.rowHeader}>Sunday</Text>
      <TextInput
        style={{
          ...styles.rowInput,
          marginBottom: 10,
        }}
        placeholder={sunPrice}
        placeholderTextColor={primaryColors.darkgreen}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={(e) =>
          e.nativeEvent.text != undefined
            ? setPrice(e.nativeEvent.text, "Sunday")
            : undefined
        }
      />
      <PricedayRow day="Monday" />
      <PricedayRow day="Tuesday" />
      <PricedayRow day="Wednesday" />
      <PricedayRow day="Thursday" />
      <PricedayRow day="Friday" />
      <PricedayRow day="Saturday" />
      <TouchableButton
        onPress={handleConfirm}
        backgroundColor={primaryColors.darkgreen}
        color={primaryColors.cream}
        text="Close"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.islandgreen,
    paddingTop: 50,
    alignItems: "center",
  },
  rowInput: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: primaryColors.darkgreen,
    borderRadius: 5,
    backgroundColor: primaryColors.white,
    height: 30,
    width: Dimensions.get("window").width / 2.5,
    paddingLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  rowHeader: {
    fontSize: 13,
    fontFamily: "acnh",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default FullPriceday;
