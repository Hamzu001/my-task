import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#0c1219" style="light" />
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="secondScreen" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
