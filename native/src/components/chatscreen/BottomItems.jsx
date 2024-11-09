import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../screens/chat/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { menuItems } from '../../utils/chatData';

const BottomItems = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <View style={styles.bottomCon}>
      <View style={styles.container}>
        {showMenu && (
          <View style={styles.menu}>
            {menuItems.map(items => (
              <TouchableOpacity key={items.id} style={styles.menuItem}>
                {items.icon}
                <Text style={styles.menuText}>{items.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
            <MaterialIcons name="dashboard" size={28} color="#0361cd" />
          </TouchableOpacity>

          <View style={styles.inputSubContainer}>
            <TouchableOpacity style={styles.iconButtonLeft}>
              <MaterialIcons name="emoji-emotions" size={20} color="gray" />
            </TouchableOpacity>

            {/* Text input */}
            <TextInput
              style={styles.input}
              placeholder="Message Type Here"
              placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.iconButtonRight}>
              <Icon name="microphone" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.sendButton}>
            <Icon name="arrow-circle-right" size={30} color="#0273F7" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomItems;
