import React, {useState, useEffect,useContext} from 'react';
import { UserContext } from '../../context/userContext';
import './MiCuenta.css';

const MiCuenta = ({onEditProfileClick}) => {


   const { user, changeState } = useContext(UserContext);
 


  const hideEmail = (email) => {
    const atIndex = email.indexOf('@');
    const hiddenPart = email.slice(0, atIndex).replace(/./g, '*');
    const visiblePart = email.slice(atIndex);
    return hiddenPart + visiblePart;
  };


  return (
    <div className="card">
      <div className="user-info">
        <img src={user.avatar} alt="Imagen de Usuario" className="user-image" />
        <button className="edit-button" onClick= {() =>onEditProfileClick(user)}>Editar perfil de Usuario</button>
      </div>
        <>
        <div className="user-field">
        <span>MOSTRAR NOMBRE:<p>{user.name}</p></span>
      </div>
      <div className="user-field">
        <span>NOMBRE DE USUARIO:<p>{user.username}</p></span>
      </div>
      <div className="user-field">
        <span>CORREO ELECTRÓNICO:<p>{hideEmail(user.email)}</p></span>
      </div>
      <div className="user-field">
        <span>TELÉFONO:<p>{user.phone}</p></span>
      </div>
      </>
      
    </div>
  );
};

export default MiCuenta;