import { Slot } from "expo-router";
import { View } from "react-native";
import { StorageProvider } from "../storage/storageProvider";

export default function Layout() {
  return (
    <StorageProvider>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Slot />
      </View>
    </StorageProvider>
  );
}