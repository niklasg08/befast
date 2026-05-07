import { StyleSheet, Dimensions, Text, View, Image } from "react-native"
import { Link } from "expo-router"

import Logo from "../assets/logo.png"
import HowTo from "../assets/icon-how-to.png"
import Settings from "../assets/icon-settings.png"

const screenWidth = Dimensions.get("window").width

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <Link href="/settings" style={styles.buttonSettings}>
        <Image source={Settings} style={styles.buttonIcon} />
      </Link>
      <Link href="/how-to" style={styles.buttonHowTo}>
        <Image source={HowTo} style={styles.buttonIcon} />
      </Link>
      </View>
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.heading1}>Highscore: 67</Text>

      <Link href="/game" style={styles.buttonPlay}>
        Play
      </Link>
    </View>
  )
}

export default Home

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
  logo: {
    width: screenWidth / 2,
    height: screenWidth / 2,
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
  buttonPlay: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#a8a8a8",
    borderRadius: 5,
    color: "#000",
    borderColor: "#000",
    borderWidth: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonSettings: {
    position: "absolute",
    left: screenWidth / 2 - 70,
  },
  buttonHowTo: {
    position: "absolute",
    right: screenWidth / 2 - 70,
  },
})
