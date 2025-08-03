import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "medium",
    fontSize: 20,
  },
});

export default Subtitle;
