import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../utils/appslice'
import { youtubeSearchApi } from '../utils/constant'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Header = () => {
   const [searchQuery, setSearchQuery]=useState("")
   const [suggestions,setSuggestions]=useState([])
   const [showSuggestions,setShowSuggestions]=useState(false)
   
   const dispatch=useDispatch()
    
   useEffect(()=>{
    // console.log(searchQuery)
    const timer= setTimeout(()=>{
        searchSuggestions()     
    },100)    

    return ()=>{
        clearTimeout(timer)
    }
   },[searchQuery])

   const searchSuggestions=async()=>{
    console.log(searchQuery)
    const data=await fetch(youtubeSearchApi+searchQuery)
    const json=await data.json()
    // console.log(json[1])
    setSuggestions(json[1])
    console.log(suggestions)
   }


    
    function toggleMenuHandler(){
         dispatch(toggle())
    }
    return (
<div className='fixed top-0 left-0 w-full  bg-white shadow-lg grid grid-flow-col p-2'>

            <div className='flex gap-10 col-span-1'> 
                <img onClick={toggleMenuHandler} className='h-7 cursor-pointer'  src="https://img.freepik.com/premium-vector/hamburger-menu-bar-flat-icon-apps-vector_1254296-1292.jpg" alt="menu" />
              <Link to="/">  <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="YoutubeLogo" /></Link>
            </div>

            <div className='relative col-span-10 px-10'>
                <div>
                <input className='border border-gray-400 w-1/2 rounded-l-full p-2 ' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
                <button className='border border-gray-400 w-10 rounded-r-full bg-gray-200 p-2'>🔍</button>
                </div>

                {showSuggestions &&<div className='absolute bg-white  px-5 rounded-2xl w-[26rem] border border-gray-100   '>
                    <ul>
                        {suggestions.map(s=>
                            <li key={s} className='py-2 hover:bg-gray-100'>🔍{s}</li>
                        )}
                    </ul>
                </div>}  
            </div>

            <div className='col-span-1 '>
                <img className='h-9' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />

            </div>


        </div>
    )
}

export default Header
