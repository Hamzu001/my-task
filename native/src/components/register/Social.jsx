import { Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import styles from '../../screens/register/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { onGoogleButtonPress, signOut } from '../../utils/googleSignIn';

const Social = () => {
  const navigation = useNavigation();

  const SignInWithGoogle = () => {
    onGoogleButtonPress()
      .then(() => console.log('Signed in with Google!'))
      .catch(err => console.log('error', err));
  };

  return (
    <View style={styles.subContainer}>
      <View style={styles.row}>
        <View style={styles.line} />
        <Text style={styles.text}>or signup with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.iconstyle}
          onPress={() => SignInWithGoogle()}>
          <Image
            source={require('../../assets/google.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconstyle} onPress={() => signOut()}>
          <Icon name="logo-facebook" size={28} color="#0273F7" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconstyle}
          onPress={() => navigation.navigate('Chat', { screen: 'Chat' })}>
          <FontAwesome5 name="mobile" size={28} color="#0273F7" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Social;
