import styles from './styles';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Form from '../../components/register/Form';
import Social from '../../components/register/Social';

GoogleSignin.configure({
  webClientId: process.env.CLIENT_ID,
  forceCodeForRefreshToken: true,
});

const RegisterScreen = () => {
  const registerHandler = async detail => {
    console.log(detail);
    // try {
    //   const responce = await fetch(`${host}/api/v1/user/register`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(detail),
    //   });

    //   const result = await responce.json();

    //   if (result.data) {
    //     return ToastAndroid.showWithGravity(
    //       result.message,
    //       ToastAndroid.SHORT,
    //       ToastAndroid.CENTER
    //     );
    //   }
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  return (
    <>
      <StatusBar backgroundColor="#0c1219" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Form registerHandler={registerHandler} />
          <Social />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
