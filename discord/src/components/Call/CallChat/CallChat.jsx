import { useState } from 'react'
import './index.css'
import Button from '../../Button/Button'
import GifLogo from '../../../assets/film.svg'
import GiftLogo from '../../../assets/gift.svg'
import addLogo from '../../../assets/plus-circle.svg'
import emojiLogo from '../../../assets/smile.svg'
import imageLogo from '../../../assets/image.svg'
import useForm from './useForm'
function CallChat() {
    const { form, handleOnChangeForm } = useForm()
    const { text } = form
    const [emojis, setEmojis] = useState([])
    const [type, setType] =useState("emoji")
    function addEmoji(emoji) {
        setList(prevList => {
            return [...prevList, emoji]
        })
    }
    return (
            <div className='chat-container'>
                <ul className='emojis-container'>

                </ul>
                <div className='send-container'>
                    <Button className="redondo"><img src={addLogo} alt="Logo add"/> </Button>
                    <input className='input' type="text" name="text" value={text} onChange={handleOnChangeForm} />
                    <Button className="redondo"><img src={GiftLogo} alt="Logo gift"/> </Button>
                    <Button className="redondo"><img src={GifLogo} alt="Logo gif"/> </Button>
                    <Button className="redondo"><img src={imageLogo} alt="Logo image"/> </Button>
                    <Button className="redondo"><img src={emojiLogo} alt="Logo emoji"/> </Button>
                    
                </div>
            </div>
    )
}

export default CallChat
