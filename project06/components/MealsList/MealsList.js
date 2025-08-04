import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(meal) => meal.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealsList;
