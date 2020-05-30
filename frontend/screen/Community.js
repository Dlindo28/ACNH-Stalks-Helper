import React, { useState, useRef, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Google from "expo-google-app-auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase";

import { primaryColors } from "../models/Styles";

import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../actions/authActions";

import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, firebaseConfig } from "../config";

const Community = ({ firebaseUser, navigation, auth }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const loggedIn = reduxState.auth.loggedIn;

  const [token, setToken] = useState();
  const [phoneAuth, setPhoneAuth] = useState(false);

  /* Setting up phone verification */
  const recaptchaVerifierRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

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
        //setLogIn();
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

  useEffect(() => {
    dispatch(logIn);
  }, []);

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
    if (phoneAuth) {
      return (
        <View style={styles.container}>
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
                console.log(e);
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
                console.log(e);
              }
            }}
          />

          <View style={styles.buttonView}>
            <Button
              title="Cancel"
              onPress={() => setPhoneAuth(false)}
              color={primaryColors.white}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.buttonView}>
            <Button
              title="Sign In With Phone"
              onPress={() => setPhoneAuth(true)}
              color={primaryColors.white}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Sign In With Google"
              onPress={signInWithGoogle}
              color={primaryColors.white}
            />
          </View>
          <Button title="Test" onPress={() => dispatch(logIn())} />
          <Text>{JSON.stringify(reduxState)}</Text>
        </View>
      );
    }
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

/* Connects redux state to component's props */
const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

export default Community;
