import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginHorizontal: 24,
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 4, // elevation works only on android
    //
    // ios shadow properties
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
