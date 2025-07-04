import React from 'react'
import Button from './Button'

const buttons=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Debtes"]
const Buttons = () => {
  return (
    <div className='flex ml-50'>
      {buttons.map((btnname,index)=>{
      return <Button key={index} name={btnname}/>
      })}
    </div>
  )
}

export default Buttons
