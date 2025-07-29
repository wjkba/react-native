import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
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

    console.log("Valid number!");
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.numberInputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4, // elevation works only on android
    //
    // ios shadow properties
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 80,
    width: 50,
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
