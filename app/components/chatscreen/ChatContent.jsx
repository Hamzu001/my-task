import { Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import styles from "../../style/SecScreenStyle";
import React, { useState } from "react";
import { chatData } from "../../utils/chatData";

const emojiOptions = ["❤️", "🔥", "👍", "😂", "😮"];

const ChatContent = () => {
  const [reactions, setReactions] = useState({});
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLongPress = (id) => {
    setSelectedMessageId(id);
    setIsModalVisible(true);
  };

  const handleEmojiSelect = (emoji) => {
    setReactions({ ...reactions, [selectedMessageId]: emoji });
    setIsModalVisible(false);
  };

  return (
    <View style={styles.contentcontainer}>
      <ScrollView style={styles.chatContainer}>
        {chatData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onLongPress={() => handleLongPress(item.id)}
          >
            <View
              style={[
                styles.messageContainer,
                item.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              {reactions[item.id] && (
                <Text style={styles.reactionEmoji}>{reactions[item.id]}</Text>
              )}
              <Text style={styles.messageText}>{item.message}</Text>
              {item.time && <Text style={styles.timeText}>{item.time}</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Emoji selection popup */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>React with Emoji</Text>
            <View style={styles.emojiOptionsContainer}>
              {emojiOptions.map((emoji) => (
                <TouchableOpacity
                  key={emoji}
                  onPress={() => handleEmojiSelect(emoji)}
                >
                  <Text style={styles.emoji}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatContent;
