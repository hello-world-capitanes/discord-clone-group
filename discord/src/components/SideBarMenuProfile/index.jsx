import './style.css'
import {CiShop} from 'react-icons/ci'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'

export const SideBarMenuProfile =({friends, changeCurrentPage})=>{

    console.log(friends)

    return (
    <div className="SideBarMenuServer__container">
        <div className="SideBarMenuServer__container__input">
                <input type="text" placeholder="Busca o incia una conversación"/>   
        </div>
        <menu className="SideBarMenuServer__container__menu">
            <li onClick={()=>changeCurrentPage("Inicio")}>
                 <AiOutlineHome size={25}/> 
                 Inicio</li>
            <li onClick={()=>changeCurrentPage("Amigos")}>
                <FaUserFriends size={25}/> 
                Amigos
            </li>
            <li onClick={()=>changeCurrentPage("Tienda")}> <CiShop size={25}/> Tienda</li>
        </menu>
        
        <ul className="SideBarMenuServer__container__listfriends">
            <h4>Mensajes directos</h4>
            {friends.map(e=>
               <li className="SideBarMenuServer__container__listfriends__li" key={e.id}> 
                    <img width={30} height={20} src={e.avatar}/>
                    <p>{e.username}</p>    
                </li>
            )}
        </ul>
    </div>)
}