import { StyleSheet, Text, View } from "react-native";
import Colors from "../../util/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    marginBottom: 16,
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default NumberContainer;
