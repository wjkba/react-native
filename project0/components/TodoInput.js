import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function TodoInput({ onAddGoal, onEndGoal, visible }) {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    onAddGoal(enteredTodoText);
    setEnteredTodoText("");
    onEndGoal();
  }

  function cancelTodoHandler() {
    onEndGoal();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/swistak.jpg")}
        />
        <TextInput
          onChangeText={todoInputHandler}
          style={styles.textInput}
          placeholder="New todo"
          value={enteredTodoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addTodoHandler} title="Add todo" />
          </View>
          <View style={styles.button}>
            <Button
              color="hsla(207, 90%, 74%, 1.00)"
              onPress={cancelTodoHandler}
              title="Cancel"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
    backgroundColor: "pink",
  },
  image: {
    width: "100%",
    height: 100,
    margin: 16,
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 16,
    backgroundColor: "white",
  },
  buttonContainer: {
    gap: 2,
    width: "100%",
  },
  button: {
    borderWidth: 1,
    borderColor: "pink",
  },
});
