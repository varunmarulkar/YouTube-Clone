import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' px-5 py-1  rounded-lg bg-gray-200 m-2 cursor-pointer'>{props.name}</button>
    </div>
  )
}

export default Button
