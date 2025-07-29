import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/krowa.jpg")}
        />
      </View>
      <Text style={styles.textContainer}>
        Your phone needed <Text>{roundsNumber}</Text> rounds to guess the number
        <Text>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
