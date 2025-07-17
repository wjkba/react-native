import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random() },
    ]);
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
        {/* ScrollView is not perfect for lists, lists can become very long */}
        {/* ScrollView renders all of its child items, even when they are not yet visible */}
        {/* That's why we should use FlatList here */}
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
