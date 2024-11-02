import React from "react";
import { useNavigation } from "expo-router";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import ChatContent from "../components/chatscreen/ChatContent";
import BottomItems from "../components/chatscreen/BottomItems";

const secondScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#213041" style="light" />
      <Header
        title="New Channel"
        onBackPress={() => navigation.navigate("index", { screen: "index" })}
      />
      <ChatContent />
      <BottomItems />
    </>
  );
};

export default secondScreen;
