import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Google from "expo-google-app-auth";

import { primaryColors } from "../models/Styles";

import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../actions/authActions";

import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, firebaseConfig } from "../config";

const Community = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const loggedIn = reduxState.auth.loggedIn;

  const [token, setToken] = useState();

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
        //androidClientId:
      });
      if (result.type == "success") {
        console.log(result.user.givenName + " logged in");
        setToken(result.accessToken);
        dispatch(logIn());
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with login");
      console.log(e);
      return { error: true };
    }
  };

  const logOutOfGoogle = async () => {
    try {
      const result = await Google.logOutAsync({
        accessToken: token,
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });
      dispatch(logOut());
      setPhoneAuth(false);
      setToken(null);
    } catch (e) {
      console.log("Error with logout");
      console.log(e);
      return { error: true };
    }
  };

  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Button title="Log out" onPress={logOutOfGoogle} />
        <Button
          title="Test"
          onPress={() =>
            dispatch({
              type: "LOGOUT",
              payload: false,
            })
          }
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button
            title="Sign In With Google"
            onPress={signInWithGoogle}
            color={primaryColors.white}
          />
        </View>
        <Button title="Test" onPress={() => dispatch(logIn())} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColors.islandgreen,
  },
  buttonView: {
    backgroundColor: primaryColors.darkgreen,
    color: primaryColors.white,
    borderRadius: 10,
  },
});

export default Community;
