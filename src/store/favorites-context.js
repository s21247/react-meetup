import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetUp) => {},
    removeFavorite: (meetUpId) => {},
    itemIsFavorite: (meetUpId) => {}
});

export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFav) =>{
            return prevUserFav.concat(favoriteMeetup);
        })
    }
    function removeFavoriteHandler(meetUpId){
        setUserFavorites(prevUserFav => {
            return prevUserFav.filter(meetup => meetup.id !== meetUpId)
        })
    }
    function itemIsFavoriteHandler(meetUpId){
        return userFavorites.some(meetup => meetup.id === meetUpId)
    }
     const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;