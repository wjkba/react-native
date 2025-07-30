import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginHorizontal: 24,
    paddingVertical: 28,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 4, // elevation works only on android
  },
});

export default Card;
