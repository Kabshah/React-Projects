import React from 'react'
import "../App"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div><h1>Reads Rack</h1></div>
      <div>
        <Link to = "/favorites"><h4>Your Favourites</h4></Link>
      </div>
    </div>
  )
}
export default Navbar