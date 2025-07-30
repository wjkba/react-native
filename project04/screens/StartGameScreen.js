import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Alert api
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <Card>
      <View style={styles.numberInputContainer}>
        <Title>New Game</Title>
        <Text>Enter number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  numberInput: {
    height: 80,
    width: 120,
    marginBottom: 32,
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: "hsla(0, 0%, 95%, 1.00)",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: "bold",
  },
  numberInputContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    gap: 8,
  },
});

export default StartGameScreen;
