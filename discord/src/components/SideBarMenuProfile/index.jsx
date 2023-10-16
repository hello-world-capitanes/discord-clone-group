import './style.css'
import { CiShop } from 'react-icons/ci'
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { UserContext } from '../../context/UserContext'
import { useContext, useState } from 'react'
import { BiMicrophone } from 'react-icons/bi'
import { BsMicMute, BsSoundwave } from 'react-icons/bs'
import { CgHeadset } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { TbHeadsetOff } from 'react-icons/tb'

import { LuPhoneMissed, LuPhoneOff } from 'react-icons/lu'


import MensajesDirectos from '../mensajes-directos/MensajesDirectos'
import {Opciones} from '../Opciones/Opciones'


export const SideBarMenuProfile = ({ friends, changeCurrentPage }) => {
  const { user } = useContext(UserContext)

  const [micState, setMicState] = useState(true)
  const [headPhoneState, setHeadPhoneState] = useState(true)
  const [closedCall, setClosedCall] = useState(false)

  const closedCallFunction = ()=>{
    setClosedCall(!closedCall)
  }


  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeStateMic = () => {
    setMicState(!micState)
  }

  const changeStateHeadPhones = () => {
    setHeadPhoneState(!headPhoneState)
  }

  return (
    <div className="SideBarMenuServer__container">
      <div className="SideBarMenuServer__container__input">
        <input type="text" placeholder="Busca o incia una conversación" />
      </div>
      <menu className="SideBarMenuServer__container__menu">
        <li onClick={() => changeCurrentPage('Inicio')}>
          <AiOutlineHome size={25} />
          Inicio
        </li>
        <li onClick={() => changeCurrentPage('Amigos')}>
          <FaUserFriends size={25} />
          Amigos
        </li>
        <li onClick={() => changeCurrentPage('Tienda')}>
          {' '}
          <CiShop size={25} /> Tienda
        </li>
      </menu>

      
      <MensajesDirectos></MensajesDirectos>
      

      <div className="SideBarMenuServer__container__userControlls">
        <div className='.SideBarMenuServer__container__userControlls__div div'>
          <span style={{color : closedCall ? "red" : "green"}}>Voz conectada</span>
          <div>
            <BsSoundwave style={{cursor:"pointer"}}/>
            {closedCall ? 
            <LuPhoneMissed 
              style={{cursor:"pointer"}} 
              onClick={closedCallFunction}/> : 
            <LuPhoneOff 
              style={{cursor:"pointer"}}
              onClick={closedCallFunction}/>}
          </div>
         
        </div>

        <section className='SideBarMenuServer__container__userControlls__section'>
        <div>
          <img
            style={{ borderRadius: '100%' }}
            width={30}
            height={30}
            src={user.avatar}
          />
          <span>{user.name}</span>
        </div>
        <ul>
          <li>
            {micState ? (
              <BiMicrophone style={{cursor:"pointer"}} onClick={changeStateMic} size={20} />
            ) : (
              <BsMicMute style={{cursor:"pointer"}} onClick={changeStateMic} size={20} />
            )}
          </li>
          <li>
            {headPhoneState ? (
              <CgHeadset style={{cursor:"pointer"}} onClick={changeStateHeadPhones} size={20} />
            ) : (
              <TbHeadsetOff style={{cursor:"pointer"}} onClick={changeStateHeadPhones} size={20} />
            )}
          </li>
          <li>
            <FiSettings size={20} onClick={openModal}/>
          </li>
          {modalIsOpen && (
            <Opciones modalIsOpen={modalIsOpen} closeModal={closeModal} />
          )}
        </ul>
        </section> 
      </div>
      
    </div>
  )
}
