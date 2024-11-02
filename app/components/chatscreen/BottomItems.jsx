import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../../style/SecScreenStyle";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

const menuItems = [
  {
    id: "1",
    icon: <MaterialIcons name="photo" size={24} color="#fff" />,
    name: "Gallery",
  },
  {
    id: "2",
    icon: <MaterialIcons name="insert-drive-file" size={24} color="#fff" />,
    name: "Files",
  },
  {
    id: "3",
    icon: <Ionicons name="location-outline" size={24} color="#fff" />,
    name: "Location",
  },
  {
    id: "4",
    icon: <Ionicons name="person-outline" size={24} color="#fff" />,
    name: "Contact",
  },
];

const BottomItems = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <View
      style={{
        width: "100%",
        bottom: "0%",
      }}
    >
      <View style={styles.container}>
        {showMenu && (
          <View style={styles.menu}>
            {menuItems.map((items) => (
              <TouchableOpacity key={items.id} style={styles.menuItem}>
                {items.icon}
                <Text style={styles.menuText}>{items.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
            <FontAwesome name="th-large" size={24} color="#0361cd" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Entypo name="emoji-happy" size={24} color="#0361cd" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Message Type Here"
            placeholderTextColor="#aaa"
          />

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="mic" size={24} color="#0361cd" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomItems;
