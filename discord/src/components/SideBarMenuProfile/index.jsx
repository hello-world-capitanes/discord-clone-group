import './style.css'
import { CiShop } from 'react-icons/ci'
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { UserContext } from '../../context/UserContext'
import { useContext, useState } from 'react'
import { BiMicrophone } from 'react-icons/bi'
import { BsMicMute } from 'react-icons/bs'
import { CgHeadset } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { TbHeadsetOff } from 'react-icons/tb'
import MensajesDirectos from '../mensajes-directos/MensajesDirectos'
export const SideBarMenuProfile = ({ friends, changeCurrentPage }) => {
  const { user } = useContext(UserContext)

  const [micState, setMicState] = useState(true)
  const [headPhoneState, setHeadPhoneState] = useState(true)

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

      <ul className="SideBarMenuServer__container__listfriends">
        <MensajesDirectos></MensajesDirectos>
      </ul>

      <div className="SideBarMenuServer__container__userControlls">
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
              <BiMicrophone onClick={changeStateMic} size={20} />
            ) : (
              <BsMicMute onClick={changeStateMic} size={20} />
            )}
          </li>
          <li>
            {headPhoneState ? (
              <CgHeadset onClick={changeStateHeadPhones} size={20} />
            ) : (
              <TbHeadsetOff onClick={changeStateHeadPhones} size={20} />
            )}
          </li>
          <li>
            <FiSettings size={20} />
          </li>
        </ul>
      </div>
    </div>
  )
}
