import { Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Octicons from "@expo/vector-icons/Octicons";
import styles from "../../style/HomeStyle";
import { useNavigation } from "expo-router";

const Social = ({promptAsync}) => {
  const navigation = useNavigation();

  const handleIconPress = (platform) => {
    Alert.alert(`Login with ${platform}`);
  };

  return (
    <View style={styles.subContainer}>
      <View style={styles.row}>
        <View style={styles.line} />
        <Text style={styles.text}>or signup with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.iconstyle}
          // onPress={() => promptAsync()}
        >
          <FontAwesome
            name="google"
            size={30}
            color="#DB4437"
            style={styles.iconsocial}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconstyle}
          onPress={() => handleIconPress("Facebook")}
        >
          <FontAwesome
            name="facebook"
            size={30}
            color="#4267B2"
            style={styles.iconsocial}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconstyle}
          onPress={() =>
            navigation.navigate("secondScreen", { screen: "secondScreen" })
          }
        >
          <Octicons
            name="device-mobile"
            size={30}
            color="#0361cd"
            style={styles.iconsocial}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Social;
