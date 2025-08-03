import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return (
    <View style={styles.listItem}>
      {data.map((dataPoint) => (
        <Text key={dataPoint}>{dataPoint}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
  },
});

export default List;
