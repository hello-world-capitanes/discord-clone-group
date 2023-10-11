import './ModalUsuario.css'
import ModalEstadoUsuario from '../ModalEstadoUsuario/ModalEstadoUsuario'
import defaultUser from '../../assets/userdb.json'
import {useState} from 'react'
import{Smile,Repeat, ChevronRight} from 'react-feather'

function ModalUsuario(){
    const [estado, setEstado]=useState(defaultUser.User.state)
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
      switch(estado){
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
                <img className="avatarUsuario" src={defaultUser.User.avatar}/>
                <div className="contenedorEstado">
                    <div className={`indicadorEstadoPerfil ${estado}`}/>
                </div>
            </div>
            <div className='contenedorInfo'>
                <p>{defaultUser.User.name}</p>
                <p><strong>{defaultUser.User.username}</strong></p>
                <hr/>
                <p><strong>MIEMBRO DE DISCORD DESDE</strong></p>
                <p>1 ene 2018</p>
                <hr/>
                <div className={`contenedorInteractivo ${modalIsOpen? "activo": ""}`} onClick={openModal}>
                    <div className={`circuloEstado ${estado}`}/>
                    <span>{mostrarEstado()}</span>
                    <ChevronRight className='iconoDerecha'/>
                </div>
                <ModalEstadoUsuario isOpen={modalIsOpen} closeModal={closeModal} changeState={changeState}/>
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