import React from 'react';
import './ModalEstadoUsuario.css'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'


function ModalEstadoUsuario({ isOpen, closeModal}) {
  if (!isOpen) return null;

  const {changeState}=useContext(UserContext)

  function cambiarEstado(newState){
    changeState(newState)
    closeModal();
  }

  return (
    <div className="modal" onMouseLeave={()=>closeModal()}>
        <div className="selectorEstado" onClick={()=>cambiarEstado("onLine")} >
            <div className={`circuloEstado onLine`}/>
            <span>En Línea</span>
        </div>
        <hr/>
        <div className="selectorEstado" onClick={()=>cambiarEstado("ausent")}>
            <div className={`circuloEstado ausent`}/>
            <span>Ausente</span>
        </div>
        <div className="selectorEstado" onClick={()=>cambiarEstado("off")}>
            <div className={`circuloEstado off ` }/>
            <div>
                <span>Desconectado</span>
                <p className="textoBajoEstado">No recibirás ninguna notificación de escritorio.</p>
            </div>
        </div>
        <div className="selectorEstado" onClick={()=>cambiarEstado("invisible")}>
            <div className={`circuloEstado invisible`}/>
            <div>
                <span>Invisible</span>
                <p className="textoBajoEstado">No aparecerás en línea, pero tendrás acceso total a Discord.</p>
            </div>
        </div>
    </div>
  );
}

export default ModalEstadoUsuario;