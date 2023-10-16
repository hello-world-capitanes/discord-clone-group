import React, { useState, useEffect, useContext } from 'react';
import "./perfil.css"
import { UserContext } from '../../context/userContext';



function Perfil() {

  const { user, changeData } = useContext(UserContext);
  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);


  const handleNameChange = (e) => {
    e.preventDefault();
    changeData({ name: newName });
    setNewName('');
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
    changeData({ ...user, username: newUsername });
    setNewUsername('');
  };
  
  const handlePhoneChange = (e) => {
    e.preventDefault();
    changeData({ ...user, phone: newPhone });
    setNewPhone('');
  };
  const handleAvatarChange = (e) => {
    e.preventDefault();
    if (newAvatar) {
      changeData({ ...user, avatar: URL.createObjectURL(newAvatar) });
      setNewAvatar(null);
    }
  };

  const handleDeleteAvatar = () => {
    changeData({ ...user, avatar: null });
  };


  
  return (
    <>
    <div>
      <h2>Perfil de usuario</h2>
    </div>
    <div className='cajaAvatar'>
      <h3><strong>¡Colecciona nuevas decoraciones de avatar!</strong></h3>
          <p className='infoAvatar'>Dale estilos a tu avatar con las últimas decoraciones, que ya puedes comprar y coleccionar con Nitro!
            <button className='irTienda'>Ir a la tienda</button>
          </p>
    </div>
    <div>
      <div className="mostrar-nombre">
        <span>NOMBRE: {user.name} </span>
      </div>
    <form onSubmit={handleNameChange} >
    <div>
      <input type="text" name="newName" value={newName}
              onChange={(e) => setNewName(e.target.value)}/>
      <input type='submit' value='Guardar nombre'/>
    </div>
    </form>
    </div>
    <hr />
    <div>
      <div className="mostrar-pronombre">
        <span>USUARIO: {user.username}</span>
      </div>
    <form onSubmit={handleUsernameChange}>
    <div>
      <input type="text" name="newUsername" id="newUsername" value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}/>
      <input type='submit' value='Guardar usuario'/>
    </div>
    </form>
    </div>
    <hr />
    <div>
      <div className="mostrar-telefono">
        <span>TELÉFONO: {user.phone}</span>
      </div>
    <form onSubmit={handlePhoneChange}>
    <div>
      <input type="text" name="newPhone" id="newPhone" value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}/>
      <input type='submit' value='Guardar teléfono'/>
    </div>
    </form>
    </div>
    <hr />
    <form onSubmit={handleAvatarChange}>
  <div className="mostrar-avatar">
    <span>AVATAR: <img src={user.avatar} alt="Imagen de Usuario" className="user-image" /></span>
  </div>

  <div className='edit-avatar'>
    <input type='file' accept='image/*' onChange={(e) => setNewAvatar(e.target.files[0])} />
    <input type='submit' className='changeAvatar' value='Cambiar avatar' />
    <button type='submit' className='removeAvatar' value='Eliminar avatar' onClick={handleDeleteAvatar}>Eliminar</button>

  </div>
  </form>

  
    

    </>
  );
}

export default Perfil;


