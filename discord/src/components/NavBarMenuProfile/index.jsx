import './style.css'
import Inbox from '../bandeja-entrada/bandejaEntrada'

export const NavBarMenuProfile =({filterFunction, filterFriendString})=>{
    


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
                <p>1</p>
                <p><Inbox/></p>
                <p>3</p>
            </ul>
       </nav>
    )
}