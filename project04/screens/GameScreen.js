import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  let content = (
    <>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Text style={{ marginBottom: 16, textAlign: "center" }}>
          Higher or lower?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="add-circle-outline" size={24} />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove-circle-outline" size={24} />
        </PrimaryButton>
      </View>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View>
          <Title>Opponent's Guess</Title>
          <View>
            <View style={{ gap: 16 }}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                <Ionicons name="add-circle-outline" size={24} />
              </PrimaryButton>
              <NumberContainer>{currentGuess}</NumberContainer>

              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="remove-circle-outline" size={24} />
              </PrimaryButton>
            </View>
          </View>
        </View>

        <View>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => <Text>{itemData.item}</Text>}
            keyExtractor={(item) => item}
          />
        </View>
      </>
    );
  }

  return <Card>{content}</Card>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    gap: 4,
  },
});

export default GameScreen;
