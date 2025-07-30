import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontWeight: "bold",
    marginBottom: 12,

    // Platform api allow us to detect on which platform is the app running
    fontSize: Platform.OS === "android" ? 18 : 17,
    textAlign: Platform.select({ ios: "left", android: "center" }),
  },
});

export default Title;
