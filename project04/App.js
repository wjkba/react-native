import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#e0f7fa", "#ffffff"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={styles.backgroundImage}
      >
        <View style={{ marginTop: 80 }}></View>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
