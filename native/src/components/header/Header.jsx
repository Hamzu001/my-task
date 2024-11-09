import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const Header = ({ title, onBackPress, icon }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ paddingTop: '2%' }}>
        <Pressable style={styles.backBtn} onPress={onBackPress}>
          {icon || <Icon name="arrow-back" size={28} color="#0273F7" />}
        </Pressable>
      </View>

      <View style={styles.subContainer}>
        <View style={{ flexDirection: 'column', paddingLeft: '10%' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>158 People Online</Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Entypo name="dots-three-vertical" size={28} color="#0273F7" />
        </View>
      </View>
    </View>
  );
};

export default Header;
