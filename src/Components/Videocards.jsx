import React from 'react'
import videoDate from '../utils/videoDate'

const Videocards = (props) => {
    // if (!props.data || !props.data.snippet) return null;
     
    const dateCheck=videoDate(props.data.snippet.publishedAt) 

  return (
    <div className='w-60 m-2 p-2'>
   <img className='w-70  rounded-2xl' src={props.data.snippet.thumbnails.high.url} alt="" />
   <h1 className='w-60 font-bold'>{props.data.snippet.title}</h1>
   <h2 className='w-60  '>{props.data.snippet.channelTitle}</h2>
   <h6>{props.data.statistics.viewCount} views  {dateCheck}</h6>
    </div>
  )
}

export default Videocards
