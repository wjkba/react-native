import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => [
          styles.button,
          pressed ? styles.button.pressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
