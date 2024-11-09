import React, { useState } from "react";
import styles from "../../screens/chat/styles";
import { chatData, emojiOptions } from "../../utils/chatData";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

const ChatContent = () => {
  const [reactions, setReactions] = useState({});
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const handleLongPress = (id) => {
    setSelectedMessageId(selectedMessageId === id ? null : id);
  };

  const handleEmojiSelect = (emoji) => {
    setReactions({ ...reactions, [selectedMessageId]: emoji });
    setSelectedMessageId(null);
  };

  return (
    <View style={styles.contentcontainer}>
      <ScrollView style={styles.chatContainer}>
        {chatData.map((item) => (
          <View key={item.id}>
            <View style={{ alignItems: "center" }}>
              {item?.time && <Text style={styles.timeText}>{item.time}</Text>}
            </View>
            <TouchableOpacity onLongPress={() => handleLongPress(item.id)}>
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

                {selectedMessageId === item.id && (
                  <View
                    style={[
                      styles.tooltip,
                      item.sender === "me"
                        ? styles.tooltipRight
                        : styles.tooltipLeft,
                    ]}
                  >
                    <View style={styles.tooltipContainer}>
                      {emojiOptions.map((emoji, i) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => handleEmojiSelect(emoji)}
                        >
                          <Text style={styles.emoji}>{emoji}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatContent;