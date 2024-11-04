import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, ToastAndroid } from "react-native";
import styles from "../style/HomeStyle";
import { StatusBar } from "expo-status-bar";
import Form from "../components/register/Form";
import Social from "../components/register/Social";
import { FIREBASE_AUTH } from "../firebaseConfig"; // Your Firebase config
import { host } from "@/constants/Constants";

const index = () => {

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
          <Social promptAsync={() => console.log("hi google")} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
