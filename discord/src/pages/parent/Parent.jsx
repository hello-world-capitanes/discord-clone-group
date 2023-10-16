import React, { useState } from 'react'
import serverBtn from '../../assets/userdb.json'
import { Outlet } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import discord from '../../assets/discord.svg'
import MensajesDirectos from '../../components/mensajes-directos/MensajesDirectos';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setDefaultUser } from '../../user/userSlice';

const Parent = () => {

  
    const user = serverBtn.User;
    const defaultUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleServerId = (id) => {
        navigate(`/server/${id}`)
    }

    const handleGoHome = () => {
      navigate('/')
    }

    const handleAddDefaultUserData = () => {
      dispatch(setDefaultUser(user))
      console.log(defaultUser)
    }

    const button = defaultUser.servers.map((item) => {
        return (
            <div key={item.name}>
                <Button 
                    className={'serverBtn'}
                    onClick={() => handleServerId(item.id)}>
                        <img className='serverBtnAvatar' src={item.avatar} alt={item.name} />
                </Button>
            </div>
        )
    })

  return (
    <main className='parent'>
      <div className='serverPanel'>
        <Button 
          className={'serverBtn'}
          onClick={() => handleGoHome()}
        >
          <img src={discord} alt="" />
        </Button>
        {button}
      </div>
      <div className='menuPanel'>
        <MensajesDirectos></MensajesDirectos>
      </div>
      <div className='nestedRoutes'>
        <Button 
            className={'loginBtn'}
            onClick={handleAddDefaultUserData}
          >
          Login
        </Button>
        <Outlet />
      </div>
    </main>
  )
}

export default Parent
