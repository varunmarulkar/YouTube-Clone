import React, { useEffect, useState } from 'react'
import { youtubeVideoApi } from '../utils/constant'
import Videocards from './videocards'
import { Link } from 'react-router-dom'

const Videocontainer = () => {

  const [videos, setVideo] = useState([])


  useEffect(() => {
    getVideos()
  }, [])

  async function getVideos() {
    let data = await fetch(youtubeVideoApi)
    let json = await data.json()
    console.log(json.items)
    setVideo(json.items)


  }
  return (
    <div className='flex flex-wrap mx-30 '>
      {videos.map((video) => {
        return <Link key={video.id} to={"/watch?v=" + video.id}> <Videocards data={video} /></Link>
      })}
    </div>
  )
}

export default Videocontainer
