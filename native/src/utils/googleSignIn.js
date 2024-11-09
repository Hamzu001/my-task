import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

async function onGoogleButtonPress() {
  try {
    await GoogleSignin.signOut();
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const signInResult = await GoogleSignin.signIn();

    console.log('signInResult', signInResult.data?.user);

    const idToken = signInResult.data?.idToken;
    if (!idToken) {
      throw new Error('No ID token found');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
}

const signOut = async () => {
  try {
    await GoogleSignin.signOut(); // Sign out from Google
    await auth().signOut(); // Sign out from Firebase
    Alert.alert('Signed Out', 'You have successfully signed out.');
  } catch (error) {
    console.error('Sign-Out Error:', error);s
    Alert.alert('Sign-Out Error', error.message);
  }
};

export { onGoogleButtonPress, signOut };
