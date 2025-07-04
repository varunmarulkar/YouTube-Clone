import React from 'react'
// import Comment from './Comment'
import CommentList from './CommentList'

const commentsData=[
    {
        name:"Varun",
        text:"hi hello my name is varun and i am here to comment..",
        replies:[]
    },
    {
        name:"Varun",
        text:"hi hello",
        replies:[
            {
                name:"Varun",
                text:"hi hello",
                replies:[]
            },
            {
                name:"Varun",
                text:"hi hello",
                replies:[]
            },
            {
                name:"Varun",
                text:"hi hello",
                replies:[]
            }, 
        ]
    },
    {
        name:"Varun",
        text:"hi hello",
        replies:[
            {
                name:"Varun",
                text:"hi hello",
                replies:[]
            },
        ]
    },
    
    
]


const Commentscontainer = () => {

  

  
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default Commentscontainer
