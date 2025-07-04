import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border-l border-black'>
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            </div>
        </div>
    ))
}

export default CommentList
