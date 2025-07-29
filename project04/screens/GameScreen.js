import { Alert, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "This is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      // direction => "lower", "greater"
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Text style={{ marginBottom: 16, textAlign: "center" }}>
          Higher or lower?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          Higher
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          Lower
        </PrimaryButton>
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 24,
  },
  buttonContainer: {
    gap: 4,
  },
});

export default GameScreen;
