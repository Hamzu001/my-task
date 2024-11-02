import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#0c1219",
      paddingBottom: 0,
    },
    menu: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#213041",
      paddingTop: 10,
    },
    menuItem: {
      alignItems: "center",
    },
    menuText: {
      color: "#aaa",
      fontSize: 12,
      marginTop: 4,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#213041",
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    iconButton: {
      padding: 8,
    },
    input: {
      flex: 1,
      color: "#aaa",
      backgroundColor: "#0c1219",
      borderWidth: 1,
      borderColor: "#0c1219",
      borderRadius: 18,
      padding: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
    sendButton: {
      backgroundColor: "#4285F4",
      borderRadius: 20,
      padding: 8,
    },
    contentcontainer: {
      flex: 1,
      backgroundColor: "#0c1219",
    },
    chatContainer: {
      padding: 10,
    },
    messageContainer: {
      maxWidth: "80%",
      padding: 10,
      marginVertical: 6,
      borderRadius: 15,
      position: "relative",
    },
    myMessage: {
      alignSelf: "flex-end",
      backgroundColor: "#007AFF",
    },
    otherMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#333",
    },
    messageText: {
      color: "#fff",
      fontSize: 16,
    },
    timeText: {
      color: "#aaa",
      fontSize: 12,
      marginTop: 5,
    },
    reactionEmoji: {
      fontSize: 20,
      position: "absolute",
      top: -18,
      right: 5,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
      width: "100%",
      padding: 15,
      backgroundColor: "#222",
      borderRadius: 10,
      alignItems: "center",
    },
    modalTitle: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 10,
    },
    emojiOptionsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      gap: 10,
    },
    emoji: {
      fontSize: 30,
    },
  });
  

  export default styles