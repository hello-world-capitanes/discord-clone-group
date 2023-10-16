import React, { useState } from 'react';
import Modal from 'react-modal';
import "./opciones.css"
import MiCuenta from '../MiCuenta/MiCuenta';
import Perfil from '../Perfil/Perfil';
import Privacidad from '../Privacidad/Privacidad';

Modal.setAppElement('#root');

function Opciones() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Mi cuenta');
  const [editingProfile, setEditingProfile] = useState(null);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleEditProfileClick = (perfil) => {
    setEditingProfile(perfil);
    setSelectedTab('Perfiles');
  };

  return (
    <div>
      <button onClick={openModal}>Opciones</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Opciones Modal"
      >
        
      <div className='modal-content'>
        <div className='options-container'>
          <div className="options-menu">
                <h3>Ajustes de usuario</h3>
          <button
            onClick={() => changeTab('Mi cuenta')}
            className={selectedTab === 'Mi cuenta' ? 'active' : ''}
          >
          Mi cuenta
          </button>
          <button
            onClick={() => changeTab('Perfiles')}
            className={selectedTab === 'Perfiles' ? 'active' : ''}
          >
          Perfiles
          </button>
          <button
            onClick={() => changeTab('Privacidad y Seguridad')}
            className={selectedTab === 'Privacidad y Seguridad' ? 'active' : ''}
          >
          Privacidad y Seguridad
          </button>
        </div>
        <div className="modal-inside-content">
        <button onClick={closeModal} className='cierre'>Cerrar</button>
        </div>
        <div>
          {selectedTab === 'Mi cuenta' && (
            <div>
          
                <MiCuenta onEditProfileClick={handleEditProfileClick}/>
              
            </div>
          )}
          {selectedTab === 'Perfiles' && (
            <div>
               <Perfil/>
            </div>
          )}
          {selectedTab === 'Privacidad y Seguridad' && (
            <div>
              <Privacidad/>
            </div>
          )}
        </div>
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default Opciones;
