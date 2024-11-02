import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, ToastAndroid } from "react-native";
import styles from "../style/HomeStyle";
import { StatusBar } from "expo-status-bar";
import Form from "../components/register/Form";
import Social from "../components/register/Social";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig"; // Your Firebase config
import { host } from "@/constants/Constants";

// Complete any existing auth sessions
WebBrowser.maybeCompleteAuthSession();

const index = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "1009287757859-b6sjms5q57p7uklbajp4k12hbdaaa74b.apps.googleusercontent.com", // Replace with your client ID
    scopes: ["profile", "email"],
    redirectUri: "https://signin-3fe79.firebaseapp.com/__/auth/handler", // Fixed redirect URI
  });

  useEffect(() => {
    if (response?.type === "success") {
      console.log(response);

      // const { id_token } = response.params;
      // const googleCredential = GoogleAuthProvider.credential(id_token);

      // signInWithCredential(FIREBASE_AUTH, googleCredential)
      //   .then((userCredential) => {
      //     setUser(userCredential.user);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [response]);

  const registerHandler = async (detail) => {
    // console.log(detail);
    try {
      const responce = await fetch(`${host}/api/v1/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });

      const result = await responce.json();

      if (result.data) {
        return ToastAndroid.showWithGravity(
          result.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {/* <StatusBar backgroundColor="#0c1219" style="light" /> */}
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Form registerHandler={registerHandler} />
          <Social promptAsync={promptAsync} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
