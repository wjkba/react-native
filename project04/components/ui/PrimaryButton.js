import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log("press");
    onPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // Do style mozna podpiąc funkcje
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#043075ff" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
  },
  buttonInnerContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: Colors.primary500,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "open-sans",
  },
  //
  // Dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
