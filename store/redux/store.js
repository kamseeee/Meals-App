import {configureStore} from "@reduxjs/toolkit"
import favoritesReducer from "./favorites"
import favorites from "./favorites"
export const store = configureStore({
    reducer:{
        // This means that the favoritesReducer will manage the state for the favoriteMeals part of the Redux state tree.
        favoriteMeals:favoritesReducer 
    }
})