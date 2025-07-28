import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.numberInputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton>Confirm</PrimaryButton>
        <PrimaryButton>Reset</PrimaryButton>
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
