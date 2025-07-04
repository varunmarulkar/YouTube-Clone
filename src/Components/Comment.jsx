import React from 'react'

const Comment = (props) => {
  return (
    <div className='flex shadow-sm bg-gray-50 p-2 rounded-lg'>
        <img className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
        <div>
      <h1 className='font-bold'>{props.data.name}</h1>
      <p>{props.data.text}</p>
      </div>
    </div>
  )
}

export default Comment
