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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
  style,
  icon,
}) => {
  const radius = bottomLeftRadius
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
          ...radius,
          ...style,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {icon || undefined}
          <Text
            style={{
              ...styles.buttonText,
              color: color,
            }}
          >
            {text}
          </Text>
        </View>
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
    height: hp("6%"),
    marginTop: hp(".5%"),
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: hp(".5%"),
      width: wp(".5%"),
    },
    elevation: 3,
    backgroundColor: "#0000",
  },
  buttonText: {
    fontFamily: "acnh",
    fontSize: wp("3.75"),
    borderColor: "white",
    height: wp("5.5%"),
    alignSelf: "center",
  },
});

export default TouchableButton;
