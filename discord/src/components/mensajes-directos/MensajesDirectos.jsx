import './styles.css'

import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const MensajesDirectos = () => {

  const [contextMenu, setContextMenu] = useState()

  const { user, changeState } = useContext(UserContext)

  const mensajesDirectos = user.friends

  const handleContextMenu = (e, friend) => {
    e.preventDefault()
    setContextMenu({ friend, x: e.clientX, y: e.clientY })
    changeState(mensajesDirectos.state)
  }

  const closeContextMenu = (e) => {
    e.preventDefault(e)
    setContextMenu()
  }
  return (
    <div
      className='direct-messages'
      onClick={closeContextMenu}
    >
      <div className='title-messages'>
        <p>MENSAJES DIRECTOS</p>
        <p>
          <FontAwesomeIcon
            className='plus-icon'
            icon={faPlus}
          ></FontAwesomeIcon>
        </p>
      </div>
      {mensajesDirectos.map((friends) => (
        <div
          key={friends.id}
          className='direct-message'
          onContextMenu={(e) => handleContextMenu(e, friends)}
        >
          <div className='avatar-status-container'>
            <img
              src={friends.avatar}
              alt={friends.username}
              className='avatar'
            />

            <FontAwesomeIcon
              icon={faCircle}
              className={`status-icon ${
                friends.state === 'connected' ? 'green' : 'gray'
              }`}
            />
          </div>
          <p>{friends.username}</p>
        </div>
      ))}

      {contextMenu && (
        <div
          className='context-menu'
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <p className='p-marcar-leido'>Marcar como leído</p>
          <hr className='hr'></hr>
          <p>Perfil</p>
          <p>Llamar</p>
          <p>Añadir nota</p>
          <p>Añadir apodo amigo</p>
          <p>Cerrar MD</p>
          <hr className='hr'></hr>
          <p>Invitar a servidor</p>
          <p>Eliminar amigo</p>
          <p>Bloquear</p>
          <hr></hr>
          <p>Silencia a @{contextMenu.friend.username}</p>
        </div>
      )}
    </div>
  )
}

export default MensajesDirectos
