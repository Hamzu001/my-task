import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/Header';
import { StatusBar } from 'react-native';
import ChatContent from '../../components/chatscreen/ChatContent';
import BottomItems from '../../components/chatscreen/BottomItems';

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#213041" barStyle="light-content" />
      <Header
        title="New Channel"
        onBackPress={() => navigation.navigate('Home', { screen: 'Home' })}
      />
      <ChatContent />
      <BottomItems />
    </>
  );
};

export default ChatScreen;
