import React from 'react'
import "../App"
import { useAppContext } from './context/appContext'
const Favourites = () => {
  const {favourites,addToFavorites,removeFromFavorites} = useAppContext()
  console.log("favs are", favourites)
  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id)
    return boolean
  }
  return (
    <div className='favorites'>
      {favourites.length > 0 ? favourites.map((book) => (
        <div key= {book.id} className='book'>
          <div><h3>{book.volumeInfo.title}</h3></div>
          <div><img src={book.volumeInfo.imageLinks.thumbnail}  alt=""/></div>
          <div>
            {favouritesChecker(book.id) ? (<button onClick={ () => removeFromFavorites(book.id)}>Remove from favourites</button>
            ): (<button onClick={ () => addToFavorites(book)}>Add to favourites</button>
          )}
        </div>
    </div>
    )) : <h1>U don't hv any fav books yet!</h1>}
    </div>
  )
}

export default Favourites
