import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../util/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

// on android screen is the entire available width and height including status bar
// window is excluding the status bar
// on ios there is no differnce
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 450 ? 12 : 24, // we can use devideWidth with if statement
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 300,
  },
  numberText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default NumberContainer;
