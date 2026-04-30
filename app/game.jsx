import { StyleSheet, Dimensions, Text, View, Image } from "react-native"
import { Link } from "expo-router"

import Back from "../assets/icon-back.png"

const screenWidth = Dimensions.get("window").width

const Game = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <Link href="/index" style={styles.buttonBack}>
        <Image source={Back} style={styles.buttonIcon} />
      </Link>
      </View>
    </View>
  )
}

export default Game

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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
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
    left: screenWidth / 2 + 70,
  },
})