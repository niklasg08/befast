import { StyleSheet, Dimensions, Text, View, Image, Switch } from "react-native";
import { Link } from "expo-router";

import Back from "../assets/icon-back.png";

const screenWidth = Dimensions.get("window").width

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/" style={styles.buttonBack}>
          <Image source={Back} style={styles.buttonIcon} />
        </Link>
      </View>
      <View>
        <Switch
        />
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    position: "absolute",
    top: 70,
  },
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    padding: 5,
    backgroundColor: "#a8a8a8",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#000",
  },
  buttonBack: {
    position: "absolute",
    right: screenWidth / 2 - 70,
  },
})