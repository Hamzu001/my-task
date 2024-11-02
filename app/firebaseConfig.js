import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBIzHwbRKgVXsVb_sTgk3tbkNOsA2fe5g",
  authDomain: "signin-3fe79.firebaseapp.com",
  projectId: "signin-3fe79",
  storageBucket: "signin-3fe79.firebasestorage.app",
  messagingSenderId: "1009287757859",
  appId: "1:1009287757859:web:b306b43fc9c18d3ebd3196",
};

// Initialize Firebase app only if it hasn't been initialized yet
let FIREBASE_APP;
if (getApps().length === 0) {
  FIREBASE_APP = initializeApp(firebaseConfig);
} else {
  FIREBASE_APP = getApps()[0]; 
}

// Initialize Firebase Auth with AsyncStorage persistence
let FIREBASE_AUTH;
try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (error) {
  // Use already initialized auth instance if available
  if (error.code === "auth/already-initialized") {
    FIREBASE_AUTH = getAuth(FIREBASE_APP);
  } else {
    throw error; 
  }
}

export { FIREBASE_APP, FIREBASE_AUTH };
