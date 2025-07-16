import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={{ color: "#fff" }}>Witaj świecie 🌍</Text>
      </View>
      <Text style={{ color: "#fff", marginBottom: 16 }}>Lorem ipsum dolor</Text>
      <Button title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteBox: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#ffff",
    padding: 8,
  },
});
