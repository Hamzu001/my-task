import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../../style/SecScreenStyle";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const menuItems = [
  {
    id: "1",
    icon: <MaterialIcons name="photo" size={28} color="#fff" />,
    name: "Gallery",
  },
  {
    id: "2",
    icon: <MaterialIcons name="insert-drive-file" size={28} color="#fff" />,
    name: "Files",
  },
  {
    id: "3",
    icon: <FontAwesome6 name="location-dot" size={28} color="#fff" />,
    name: "Location",
  },
  {
    id: "4",
    icon: <FontAwesome5 name="users" size={28} color="#fff" />,
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

          <View style={styles.inputSubContainer}>
            <TouchableOpacity style={styles.iconButtonLeft}>
              <Entypo name="emoji-happy" size={24} color="gray" />
            </TouchableOpacity>

            {/* Text input */}
            <TextInput
              style={styles.input}
              placeholder="Message Type Here"
              placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.iconButtonRight}>
              <Ionicons name="mic" size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.sendButton}>
            <FontAwesome name="arrow-circle-right" size={38} color="#4285F4" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomItems;
