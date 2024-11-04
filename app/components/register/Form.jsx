import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  ToastAndroid,
  Image,
} from "react-native";
import styles from "../../style/HomeStyle";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Form = ({ registerHandler }) => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = () => {
    if ([number, otp].some((fields) => fields.trim() === "")) {
      return ToastAndroid.showWithGravity(
        "All fields are require",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
    // console.log(number, otp);
    registerHandler({ number, otp });
    setNumber('')
    setOtp('')
  };

  return (
    <View style={styles.containerAlign}>
      <Text style={styles.registerText}>Register</Text>
      <Text style={styles.subText}>Hello, welcome back to Chat</Text>
      <View style={styles.inputAlign}>
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/images/flag.png')} style={{width:34, height:22 }}  />
          <Text style={{ color: "#f9f9fa", marginLeft: 8 }}> +94 </Text>
          <TextInput
            style={styles.input}
            placeholder=" 7822345679"
            placeholderTextColor="#0361cd"
            value={number}
            keyboardType="number-pad"
            onChangeText={setNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input2}
            placeholder="Enter OTP code here"
            placeholderTextColor="#1a2635"
            value={otp}
            keyboardType="default"
            onChangeText={setOtp}
          />
          <FontAwesome5 name="fingerprint" size={26} color="#1a2635" />
        </View>
        <View style={{ paddingTop: "40%" }}>
          <TouchableOpacity onPress={() => Alert.alert("Navigate to Signup")}>
            <Text style={styles.linkText}>
              Have an Account?
              <Text style={{ fontWeight: "500", color: "#0361cd" }}>
                {" "}
                Login Now
              </Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Submit</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
