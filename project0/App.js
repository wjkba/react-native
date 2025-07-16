import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [...currentTodos, enteredTodoText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={todoInputHandler}
          style={styles.textInput}
          placeholder="New todo"
        />
        <Button onPress={addTodoHandler} title="Add todo" />
      </View>
      <View style={styles.todosContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {todos.map((todo, i) => (
            <View key={i} style={styles.todoItem}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  textInput: {
    width: "70%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  todosContainer: {
    flex: 6,
  },
  todoItem: {
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 85%, 1.00)",
    borderRadius: 8,
  },
  todoText: {
    fontSize: 18,
  },
});
