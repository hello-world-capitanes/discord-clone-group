import { useState } from 'react'
import './index.css'
import Image from '../Image/Image'
function Call({ friends }) {
    const [emojis, setEmojis] = useState([])
    function addEmoji(emoji) {
        setList(prevList => {
            return [...prevList, emoji]
        })
    }
    return (
        <div className='call-container'>
            <div className='friends-container'>
                <ul className='friends-list'>
                {
                friends.map((element) => 
                    <li className='friend-element' key={element.id}>
                        <Image className="avatar" link={element.avatar} title={`Avatar de ${element.username}`}></Image>
                    </li>
                    )
                }
                </ul>
            </div>
            <div className='chat-container'>

            </div>
        </div>
    )
}

export default Call
