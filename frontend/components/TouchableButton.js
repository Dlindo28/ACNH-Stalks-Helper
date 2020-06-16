/**
 * @file Builds component for customizeable buttons
 * @author Daniel Lindo
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

/**
 * Button component with editable colors, onPress function
 * @function TouchableButton
 * @param {string} color - text color
 *  @param {string} backgroundColor - button color
 * @param {string} text - text value
 * @param {function} onPress - function to call when button is pressed
 * @returns {JSX.Element}
 */
const TouchableButton = ({
  color,
  backgroundColor,
  onPress,
  text,
  width,
  bottomLeftRadius,
  bottomRightRadius,
}) => {
  const rad = bottomLeftRadius
    ? {
        borderBottomLeftRadius: 10,
      }
    : bottomRightRadius
    ? {
        borderBottomRightRadius: 10,
      }
    : {
        borderRadius: 10,
      };
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={{
          ...styles.button,
          backgroundColor: backgroundColor,
          width: width != null ? width : Dimensions.get("window").width / 1.05,
          ...rad,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: "acnh",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,

    marginTop: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonText: {
    paddingTop: 10,
    fontFamily: "acnh",
  },
});

export default TouchableButton;
