import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/krowa.jpg")}
          />
        </View>
        <Text style={styles.textContainer}>
          Your phone needed <Text>{roundsNumber}</Text> rounds to guess the
          number
          <Text>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
