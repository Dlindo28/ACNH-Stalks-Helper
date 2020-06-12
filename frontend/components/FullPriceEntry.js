import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, Dimensions } from "react-native";
import { useSetPrice } from "../hooks";
import AsyncStorage from "@react-native-community/async-storage";

import TouchableButton from "./TouchableButton";

import { primaryColors, secondaryColors } from "../models/Styles";

const buffer = {};

const getPrice = async (day) => {
  const price = await AsyncStorage.getItem(day);
  return price != null ? price : "0";
};

const PriceEntryRow = ({ day }) => {
  const setPrice = useSetPrice();
  const [amPrice, setAmPrice] = useState("0");
  const [pmPrice, setPmPrice] = useState("0");

  useEffect(() => {
    (async () => {
      setAmPrice((await getPrice(day + "AM")).toString());
      setPmPrice((await getPrice(day + "PM")).toString());
    })();
  }, []);

  return (
    <View>
      <Text style={styles.rowHeader}>{day}</Text>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.rowInput}
          onSubmitEditing={(e) =>
            e.nativeEvent.text ? setPrice(e.nativeEvent.text, day + "AM") : null
          }
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(price) => {
            buffer[day + "AM"] = price;
            setAmPrice(price.toString());
          }}
          placeholder={amPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
        <TextInput
          style={styles.rowInput}
          onSubmitEditing={(e) =>
            e.nativeEvent.text ? setPrice(e.nativeEvent.text, day + "PM") : null
          }
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(price) => {
            buffer[day + "PM"] = price;
          }}
          placeholder={pmPrice}
          placeholderTextColor={primaryColors.darkgreen}
        />
      </View>
    </View>
  );
};

const FullPriceEntry = ({ setModalVisible }) => {
  const setPrice = useSetPrice();
  const [sundayPrice, setSundayPrice] = useState("0");

  const handleConfirm = () => {
    for (let entry in buffer) {
      setPrice(buffer[entry], entry);
    }
    setModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      setSundayPrice((await getPrice("Sunday")).toString());
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
        placeholder={sundayPrice}
        placeholderTextColor={primaryColors.darkgreen}
        onSubmitEditing={(e) =>
          e.nativeEvent.text ? setPrice(e.nativeEvent.text, "Sunday") : null
        }
        keyboardType="numeric"
        returnKeyType="done"
        onChangeText={(price) => {
          buffer["Sunday"] = price;
        }}
      />
      <PriceEntryRow day="Monday" />
      <PriceEntryRow day="Tuesday" />
      <PriceEntryRow day="Wednesday" />
      <PriceEntryRow day="Thursday" />
      <PriceEntryRow day="Friday" />
      <PriceEntryRow day="Saturday" />
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

export default FullPriceEntry;
