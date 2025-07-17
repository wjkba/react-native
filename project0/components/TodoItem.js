import { StyleSheet, Text, View, Pressable } from "react-native";

function TodoItem({ text, id, onDeleteItem }) {
  function handleDeleteTodo() {
    onDeleteItem(id);
  }

  return (
    // To make the View tapable we use Pressable
    <Pressable style={(pressData) => pressData.pressed && styles.pressedItem}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>
        <Pressable
          android_ripple={{ color: "#d9d9d9ff" }}
          onPress={handleDeleteTodo}
        >
          <Text style={{ color: "red", padding: 4 }}>DELETE</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 85%, 1.00)",
    borderRadius: 8,
  },
  pressedItem: {
    backgroundColor: "pink",
  },
  todoText: {
    fontSize: 18,
  },
});
