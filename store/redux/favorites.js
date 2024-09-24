import {createSlice} from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state,action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavorite:(state,action)=>{ 
        state.ids.splice(state.ids.indexOf(action.payload.id),1);
        // We could also use "action.payload" here because we're just passing one argument to the function which is id, we typically make action.payload an object just like we did in this case when we're passing more than 1 arguments to the function.
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;