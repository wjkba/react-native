import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    paddingTop: 48,
    flex: 1,
  },
});
