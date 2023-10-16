import './index.css'
import useForm from './useForm'
import Image from '../Image/Image'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
function FriendSelector({isVisible}) {
    const { isSelected, canSelectMore, toSelect, handleOnChangeForm, handleSubmit } = useForm()
    const {user} = useContext(UserContext)
    const [text, setText] = useState("")
    let actualFriends = user.friends.filter((ele) => ele.username.toUpperCase().startsWith(text.toUpperCase()))

    function handleOnChangeFilter(event) {
        setText(event.target.value)
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className='selector-container'>
            <h3 className='title'>Seleccionar amigos</h3>
            <p className='number-friends'>Puedes añadir {toSelect()} amigos más</p>
            <div className='filter-container'>
                <input placeholder='Escribe el nombre de usuario de un amigo' className='filter-input' type="text" name="text" value={text} onChange={handleOnChangeFilter} />
            </div>
            <form className='form-selector-amigos' onSubmit={(event) => handleSubmit(event)}>
                <ul className="friends-list">
                    {
                        actualFriends.map((element) =>
                            <li key={element.id} className='friends-element'>
                                <div className='contact-info'>
                                    <Image link={element.avatar} title={`Avatar de ${element.username}`} />
                                    <div className='name'>
                                        {element.username}
                                    </div>
                                </div>
                                <label className='label'>
                                    <input className='input-checkbox' disabled={!isSelected(element.username) && !canSelectMore()} type="checkbox" name={element.username} onChange={handleOnChangeForm} />
                                </label>
                            </li>
                        )
                    }
                </ul>
                <input type="submit" value="Crear MD" className='send' />
            </form>
        </div>
    )
}

export default FriendSelector
