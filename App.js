import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      {/* First screen is the default Rendered screen */}
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={
          { title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
           }
          
        }
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation})=>{
            //   const catId = route.params.categoryId
            //   return {
            //     title:catId
            //   }
            // }}
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
            options={{
              title: "Meal Details",
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
