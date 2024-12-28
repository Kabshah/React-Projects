import { useState,useEffect } from "react"
import React  from 'react'
import "../App.css"
import { useParams } from 'react-router'
import axios from "axios" 


const BookDetails = () => {
  const [book,setBook] = useState({})
  const {id} =useParams()
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((res) =>{
      setBook(res.data)
    })
    .catch((err) => console.log(err))
  },[id])
  if (!book) return <div>Loading...</div>
  return (
    <div className='book-details'>
      <div className="book-image">
        <h2>{book.volumeInfo?.title}</h2>
        {book.volumeInfo?.imageLinks && (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="#" /> )}
      </div>
      <div className="book-poster">
        <h2>Description</h2>
        <p>{book.volumeInfo?.description || book.volumeInfo?.subtitle}</p>
        <h2>Authors</h2>
        <p>{book.volumeInfo?.authors}</p>
        <h2>Genres</h2>
        <p>{book.volumeInfo?.categories}</p>
      </div>
    </div>
  )
}
export default BookDetails