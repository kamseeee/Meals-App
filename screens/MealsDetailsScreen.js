import { useContext, useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {addFavorite,removeFavorite} from "../store/redux/favorites";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealsDetailsScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext); 
  // use context returns an object that contains the value prop of the nearest Provider for the context
  const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}));
      // We're passing an object to the function because we used "action.payload.id",in the reducer function, we could aslo specify the id directly as an argument to the function if we had used "action.payload" in the reducer function. 
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}));

    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [selectedMeal]);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
