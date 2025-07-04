import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Commentscontainer from './Commentscontainer'
import Livechat from './Livechat'

const Watchpage = () => {
    const[searchParams]=useSearchParams()
    const videoId=searchParams.get("v")
  return (
    <div className='flex flex-row mt-18'>
    <div className='px-5 flex flex-col  '>
      <div>
      <iframe width="800" 
      height="400" 
      src={"https://www.youtube.com/embed/"+videoId} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
      </div>
      <div>
      <Commentscontainer/>
      </div>
    </div>

    <div>
      <Livechat/>
    </div>
    </div>
  )
}

export default Watchpage
