import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
// import { colors } from "../constants/Constants";

const Header = ({ title, onBackPress, icon }) => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          paddingTop: "2%",
        }}
      >
        <Pressable
          style={{
            borderWidth: 1,
            padding: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
            backgroundColor: "#14293F",
            borderColor: "#14293F",
          }}
          onPress={onBackPress}
        >
          {icon || <Ionicons name="arrow-back" size={28} color="#0273F7" />}
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column", paddingLeft: "10%" }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>158 People Online</Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="#0273F7" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#213041",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    paddingTop: "16%",
    borderWidth: 0,
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    paddingBottom: 1,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#0273F7",
    letterSpacing: 1,
  },
});

export default Header;
