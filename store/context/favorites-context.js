import { createContext, useState } from "react";
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
// The object passed to createContext represents the default value for the context.    It is just used in this case for auto-completion purposes in the editor because without it, the editor would not know what properties the context object has.

//  This default value is used if a component that consumes the context does not have a corresponding context provider higher up in the component tree. If a context provider does not explicitly provide a value, the default values specified when creating the context will be used by any component that consumes the context.

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
