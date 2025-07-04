import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

//early return: if this is false it will not go further to next line
if(!isMenuOpen) return null;

  return (
    <div className="fixed top-14 h-[calc(100vh-56px)] w-40 bg-white p-5 shadow-lg overflow-y-auto">

      <ul className='cursor-pointer'>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className='font-bold mt-10 '>Explore</h1>
      <ul className='cursor-pointer'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
    </div>
  )
}

export default Sidebar
