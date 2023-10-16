import './style.css'
import { useState } from 'react'
import FriendSelector from '../FriendSelector/FriendSelector'
import Button from '../Button/Button'
import sendLogo from '../../assets/send.svg'
export const NavBarMenuProfile =({filterFunction, filterFriendString})=>{
    const [isVisible, setIsVisible] = useState(false)
    function setVisibility(visibility) {
        setIsVisible(visibility)
    }
    function handleVisible() {
        setVisibility(prevState => !prevState)
    }

    return (
       <nav className='NavBarMenuServer__nav'>
            
            <ul className='NavBarMenuServer__nav__menu'>
                <li>
                    Amigos
                </li>
                <li style={{backgroundColor: filterFriendString == "connected" ? "#6e7074" : null}} onClick={()=>filterFunction("connected")}>En línea</li>
                <li style={{backgroundColor: filterFriendString == "" ? "#6e7074" : null}}onClick={()=>filterFunction("")}>  Todos</li>
                <li style={{backgroundColor: filterFriendString == "Pendiente" ? "#6e7074" : null}}onClick={()=>filterFunction("pendiente")}>Pendiente</li>
                <li style={{backgroundColor: filterFriendString == "Añadir" ? "#6e7074" : null}}onClick={()=>filterFunction("Añadir")}>Añadir Amigo</li>
            </ul>
            <ul className='NavBarMenuServer__nav__leftmenu'>
                <Button onClick={handleVisible} className="button-selector"><img src={sendLogo} alt="Logo gift"/> </Button>
                <p>2</p>
                <p>3</p>
            </ul>
            <FriendSelector isVisible={isVisible}/>
       </nav>
    )
}