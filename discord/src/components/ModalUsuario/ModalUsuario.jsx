import './ModalUsuario.css'
import ModalEstadoUsuario from '../ModalEstadoUsuario/ModalEstadoUsuario'
import {useState, useContext} from 'react'
import{Smile,Repeat, ChevronRight} from 'react-feather'
import { UserContext } from '../../context/UserContext'

function ModalUsuario(){
    const {user}=useContext(UserContext)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const changeState = (newState) => {
        setEstado(newState)
    }

    const mostrarEstado = () => {
      switch(user.state){
        case "onLine":
            return "En Línea"
        case "off":
            return "Desconectado"
        case "invisible":
            return "Invisible"
        case "ausent":
            return "Ausente"
        default:
            return "Error"
      }  
    }

    return (
        <div className="tarjetaUsuario">
            <div className="headerTarjeta"/>
            <div className="contenedorImagen">
                <img className="avatarUsuario" src={user.avatar}/>
                <div className="contenedorEstado">
                    <div className={`indicadorEstadoPerfil ${user.state}`}/>
                </div>
            </div>
            <div className='contenedorInfo'>
                <p>{user.name}</p>
                <p><strong>{user.username}</strong></p>
                <hr/>
                <p><strong>MIEMBRO DE DISCORD DESDE</strong></p>
                <p>1 ene 2018</p>
                <hr/>
                <div className={`contenedorInteractivo ${modalIsOpen? "activo": ""}`} onClick={openModal}>
                    <div className={`circuloEstado ${user.state}`}/>
                    <span>{mostrarEstado()}</span>
                    <ChevronRight className='iconoDerecha'/>
                </div>
                <ModalEstadoUsuario isOpen={modalIsOpen} closeModal={closeModal}/>
                <div className="contenedorInteractivo">
                    <Smile className='iconoIzquierda'/>
                    <span>Establecer estado personalizado</span>
                </div>
                <hr/>
                <div className="contenedorInteractivo">
                    <Repeat className='iconoIzquierda'/>
                    <span>Cambiar cuenta</span>
                </div>
            </div>
        </div>
    )
}

export default ModalUsuario