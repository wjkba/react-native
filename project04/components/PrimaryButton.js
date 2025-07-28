import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("press");
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
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
  },
  buttonInnerContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#008CBA",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  //
  // Dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
