import { useState } from 'react'
import './index.css'
import Button from '../../Button/Button'
import GifLogo from '../../../assets/film.svg'
import GiftLogo from '../../../assets/gift.svg'
import addLogo from '../../../assets/plus-circle.svg'
import emojiLogo from '../../../assets/smile.svg'
import imageLogo from '../../../assets/image.svg'
import useForm from './useForm'
import useToggle from './useToggle'
import EmojisModal from '../../EmojisModal/EmojisModal'
function CallChat() {
    const [state, toggle] = useToggle()
    const { form, handleOnChangeForm, clearForm } = useForm()
    const { text } = form
    const [mensajes, setMensajes] = useState([])
    const [type, setType] =useState("emoji")
    function addMensaje(mensaje) {
        setMensajes(prevList => {
            return [...prevList, mensaje]
        })
    }

    function handleSubmit(event, mensaje) {
        event.preventDefault()
        clearForm()
        addMensaje({id: Date.now(), content: mensaje, type: "text"})
    }

    function handleButon(type) {
        setType(type)
        toggle()
    }

    return (
            <div className='chat-container'>
                <ul className='mensajes-container'>
                   { 
                    mensajes.map((element) => 
                    <li key={element.id}>
                            {element.type=="text" && <p>{element.content}</p>}
                            {element.type=="image" && <img src={element.content} alt="Image or gif"/>}
                    </li>
                    )
                   }
                </ul>
                {console.log(mensajes)}
                <EmojisModal isModalActive={state} setIsModalActive={toggle} initialMode={type} setAddEmoji={addMensaje} />
                <div className='send-container'>
                    <Button className="redondo"><img src={addLogo} alt="Logo add"/> </Button>
                    <form className='form' onSubmit={(event) => handleSubmit(event, text)}>
                        <input className='input' type="text" name="text" value={text} onChange={handleOnChangeForm} />
                    </form>
                    <Button className="redondo"><img src={GiftLogo} alt="Logo gift"/> </Button>
                    <Button className="redondo" onClick={() => handleButon("gif")}><img src={GifLogo} alt="Logo gif"/> </Button>
                    <Button className="redondo" onClick={() => handleButon("sticker")}><img src={imageLogo} alt="Logo image"/> </Button>
                    <Button className="redondo" onClick={() => handleButon("emoji")}><img src={emojiLogo} alt="Logo emoji"/> </Button>
                    
                </div>
            </div>
    )
}

export default CallChat
