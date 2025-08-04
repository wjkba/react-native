import { Pressable, StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function IconButton({ icon, color = "black", onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={{ height: 24 }}>
        <FontAwesome name={icon} size={24} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
