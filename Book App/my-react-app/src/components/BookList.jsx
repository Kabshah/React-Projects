import React from 'react'
import "../App"
import axios from 'axios'
//import {API_URL} from '../API/API_URL';
import { useEffect, useState } from "react"
import { useAppContext } from './context/appContext'
import { useNavigate } from 'react-router-dom'

const BookList = () => {
  const [books,setBooks] = useState([])
  const {favourites,addToFavorites,removeFromFavorites} = useAppContext()
  console.log("favs are", favourites)
  const navigate = useNavigate()

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id)
    return boolean
  }
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+books+'s&key=AIzaSyDeOUIdWHJBcup78ivM0ZGil7782ycpq_0').then(res =>{
            console.log(res.data)
            setBooks(res.data.items)
        }).catch(err => console.log(err))
    },[])
  return (
    <div className='book-list'>
      {books.map((book) => (
        <div key= {book.id} className='book'>
          <div><h3>{book.volumeInfo.title}</h3></div>
          <div><img src={book.volumeInfo.imageLinks.thumbnail}  alt="" onClick={() => navigate(`/books/${book.id}`)}/></div>
          <div>
            {favouritesChecker(book.id) ? (<button onClick={ () => removeFromFavorites(book.id)}>Remove from favourites</button>
            ): (<button onClick={ () => addToFavorites(book)}>Add to favourites</button>
          )}
        </div>
    </div>
    ))}
    </div>
  )
}
export default BookList;