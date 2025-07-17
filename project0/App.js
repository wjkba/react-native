import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random() },
    ]);
  }

  function deleteGoalHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {modalIsVisible && (
          <TodoInput
            visible={modalIsVisible}
            onAddGoal={addTodoHandler}
            onEndGoal={endAddGoalHandler}
          />
        )}
        <View style={styles.todosContainer}>
          {/* ScrollView is not perfect for lists, lists can become very long */}
          {/* ScrollView renders all of its child items, even when they are not yet visible */}
          {/* That's why we should use FlatList here */}
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <View style={{ paddingBottom: 32 }}>
          <Button
            onPress={startAddGoalHandler}
            title="Add New Todo"
            color="#00820dff"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
  },
  todosContainer: {
    flex: 6,
  },
});
