import React, { useEffect } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/Chatslice'
import { generateRandomName,randomMessageGenerator } from '../utils/Randomname'

const Livechat = () => {

    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const x = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: randomMessageGenerator(20)
            }))
        }, 2000);

        return () => clearInterval(x)
    }, [])
    return (
        <div className='w-[400px] h-[400px] p-1 -mx-3 border border-black bg-slate-100 rounded-lg overflow-auto flex flex-col-reverse'>
            {chatMessages.map((c, i) => (
                <Chatmessage key={i} name={c.name} message={c.message} />
            ))}

        </div>
    )
}

export default Livechat
