import React, { useEffect, useState } from 'react'
import serverBtn from '../../assets/userdb.json'
import { Outlet } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import discord from '../../assets/discord.svg'
import MensajesDirectos from '../../components/mensajes-directos/MensajesDirectos';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, fetchUserData, selectError, selectStatus } from '../../user/userSlice';

const Parent = () => {

    const defaultUser = useSelector(selectUser);
    const showError = useSelector(selectError);
    const showStatus = useSelector(selectStatus)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleServerId = (id) => {
        navigate(`/server/${id}`)
    }

    const handleGoHome = () => {
      navigate('/profile')
    }

    useEffect(() => {
      handleAddDefaultUserData()
    }, [dispatch])

    const handleAddDefaultUserData = () => {
      dispatch(fetchUserData())
    }

    console.log('error', showError)
    console.log('status', showStatus)
    console.log('def', defaultUser)

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
