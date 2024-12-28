import { createContext } from "react";
import { useState ,useContext} from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)
    if(context === undefined) {
        throw new Error("Appcontext must be written within appContext")
    }
    return context
}
const AppContextProvider = ({children}) => {
    const [favourites,setFavorites] = useState([])
    const addToFavorites = (book) => {
        const oldFavourites = [...favourites]
        const newFavourites = oldFavourites.concat(book)
        setFavorites(newFavourites)
    }
    const removeFromFavorites = (id) => {
        const oldFavourites = [...favourites]
        const newFavourites = oldFavourites.filter((book) => book.id !== id)
        setFavorites(newFavourites)
    }
    return(
        <AppContext.Provider value={{favourites,addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider