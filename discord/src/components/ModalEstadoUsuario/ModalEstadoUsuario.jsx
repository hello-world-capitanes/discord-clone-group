import React from 'react';
import './ModalEstadoUsuario.css'
function ModalEstadoUsuario({ isOpen, closeModal, changeState}) {
  if (!isOpen) return null;

  function cambiarEstado(newState){
    changeState(newState)
    closeModal();
  }

  return (
    <div className="modal" onMouseLeave={()=>closeModal()}>
        <div className="selectorEstado" onClick={()=>cambiarEstado("onLine")} >
            <div className={`circuloEstado onLine`}/>
            <span>En Linea</span>
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
                <p>No recibirás ninguna notificación de escritorio.</p>
            </div>
        </div>
        <div className="selectorEstado" onClick={()=>cambiarEstado("invisible")}>
            <div className={`circuloEstado invisible`}/>
            <div>
                <span>Invisible</span>
                <p>No aparecer-as en línea, pero tendrás acceso total a Discord.</p>
            </div>
        </div>
    </div>
  );
}

export default ModalEstadoUsuario;