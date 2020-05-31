import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";

import { setDate, setTime } from "../actions/datetimeActions";
import { useDispatch, useSelector } from "react-redux";
import { primaryColors, secondaryColors } from "../models/Styles";

const DateTimeSetter = () => {
  const dispatch = useDispatch();
  const [tempDate, setTempDate] = useState(new Date());
  const [modalOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modalOpen);
  };

  if (Platform.OS == "ios") {
    return (
      <View>
        <Button title="Set Time" onPress={toggleModal} />
        <Modal
          isVisible={modalOpen}
          backdropColor={primaryColors.white}
          style={styles.modal}
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}
          swipeDirection="right"
          animationIn="slideInRight"
          animationOut="slideOutRight"
          onSwipeComplete={toggleModal}
          backdropOpacity={1}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.header}>Select Time</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={tempDate}
              mode="datetime"
              onChange={(e, d) => {
                e.preventDefault();
                setTempDate(d);
              }}
              style={{}}
            />
            <View style={styles.button}>
              <Button
                title="Enter"
                color="black"
                onPress={() => {
                  dispatch(setDate(tempDate));
                  toggleModal();
                }}
              />
            </View>
            <View
              style={{
                ...styles.button,
                backgroundColor: secondaryColors.rose,
              }}
            >
              <Button
                title="Reset"
                onPress={() => {
                  dispatch(setDate(new Date()));
                  toggleModal();
                }}
                color="black"
              />
            </View>

            <Button title="Cancel" onPress={toggleModal} />
            <Text>{}</Text>
          </View>
        </Modal>
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

const styles = StyleSheet.create({
  modal: {
    maxHeight: Dimensions.get("window").height / 2,
    justifyContent: "center",
  },
  button: {
    backgroundColor: primaryColors.islandgreen,
    color: "black",
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 5,
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 50,
  },
});

export default DateTimeSetter;
