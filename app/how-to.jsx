import { StyleSheet, Dimensions, Text, View, Image } from "react-native"
import { Link } from "expo-router"

import Back from "../assets/icon-back.png"

const screenWidth = Dimensions.get("window").width

const HowTo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/" style={styles.buttonBack}>
          <Image source={Back} style={styles.buttonIcon} />
        </Link>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading1}>1. Game</Text>
        <Text style={styles.text}>
          {`The first part of the game is all about reaction.\n`}
          {`After the countdown, you have to tap on the\n`}
          {`popped up circle as fast as possible. When\n`}
          {`doing so, the circle will disappear and the count\n`}
          {`goes up by one. Next, a new circle will be\n`}
          {`popped up. Try to tap as many circles within\n`}
          {`10 seconds as you can!`}
        </Text>
        <Text></Text>
        <Text style={styles.heading1}>2. Game</Text>
        <Text style={styles.text}>
          {`With the second game, you have the chance to\n`}
          {`drastically increase your score. All you need\n`}
          {`to do is shaking your phone as fast as you can.\n`}
          {`After 5 seconds, you can stop and the count\n`}
          {`of tapped circles will be multiplied by a factor.\n`}
          {`The factor was determined with your shaking\n`}
          {`speed.`}
        </Text>
        <Text style={styles.heading1}>Highscore</Text>
        <Text style={styles.text}>
          {`The highscore is the maximum score you were\n`}
          {`able to achieve. \n`}
        </Text>
      </View>
    </View>
  )
}

export default HowTo

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