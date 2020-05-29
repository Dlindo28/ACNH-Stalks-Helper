import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { primaryColors } from "../models/Styles";

import * as Google from "expo-google-app-auth";
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "../config";

const Community = ({ firebaseUser, navigation }) => {
  const [loggedIn, setLoggedIn] = useState();
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
        // navigate to community
        /*
        navigation.navigate("Community", {
          user: result.user,
        });
        */
        setLoggedIn(true);
        setToken(result.accessToken);
        setResult(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with login");
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
      setLoggedIn(false);
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
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Sign In With Google" onPress={signInWithGoogle} />
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
});

export default Community;
