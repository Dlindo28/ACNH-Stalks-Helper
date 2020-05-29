import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Google from "expo-google-app-auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase";

import { primaryColors } from "../models/Styles";

import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, firebaseConfig } from "../config";

const Community = ({ firebaseUser, navigation }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [token, setToken] = useState();

  /* Setting up phone verification */
  const recaptchaVerifierRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [message, showMessage] = useState("Default message");

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
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifierRef}
          firebaseConfig={firebaseConfig}
        />
        <TextInput
          placeholder="+1 999 999 9999"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Button
          title="Send Verification Code"
          onPress={async () => {
            try {
              const phoneProvider = new firebase.auth.PhoneAuthProvider();
              phoneProvider
                .verifyPhoneNumber(phoneNumber, recaptchaVerifierRef.current)
                .then(setVerificationId);

              showMessage({
                text: "Verification code has been sent to your phone.",
              });
            } catch (e) {
              showMessage({ text: `Error: ${e.message}`, color: "red" });
            }
          }}
        />
        <Text>Enter Verification Code</Text>
        <TextInput
          editable={!!verificationId}
          placeholder="123456"
          onChangeText={(text) => setVerificationCode(text)}
        />
        <Button
          title="Confirm Code"
          disabled={!verificationId}
          onPress={async () => {
            try {
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              await firebase.auth().signInWithCredential(credential);
              showMessage({ text: "Logged In" });
              setLoggedIn(true);
            } catch (e) {
              showMessage({ text: `Error: ${e.message}`, color: "red" });
            }
          }}
        />
        {message ? <Text>{message.text}</Text> : undefined}
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
