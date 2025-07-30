import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // here we use a hook that gets window dimensions
  // it's nice to have when we need dynamic dimensions
  const { width, height } = useWindowDimensions();

  // useFonts returns an array where first element is a boolean that indicates whether
  // the fonts have been loaded already or not
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function gameStartHandler() {
    setGameIsOver(true);
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onStartNewGame={gameStartHandler}
      />
    );
  }

  const paddingTopDistance = height < 380 ? 32 : 64;

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#e0f7fa", "#ffffff"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={{ paddingTop: paddingTopDistance, flex: 1 }}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
