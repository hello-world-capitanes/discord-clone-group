import { useState } from 'react'
import './index.css'
import Image from '../Image/Image'
import Button from '../Button/Button'
import GifLogo from '../../assets/film.svg'
import GiftLogo from '../../assets/gift.svg'
import addLogo from '../../assets/plus-circle.svg'
import emojiLogo from '../../assets/smile.svg'
import imageLogo from '../../assets/image.svg'
import CallFriends from './CallFriends/CallFriends'
import CallChat from './CallChat/CallChat'
function Call({ friends }) {

    return (
        <div className='call-container'>
            <CallFriends friends={friends} />
            <CallChat />
        </div>
    )
}

export default Call
