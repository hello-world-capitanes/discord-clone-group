import React, { useState } from 'react'
import serverBtn from '../../assets/userdb.json'
import { Outlet } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import discord from '../../assets/discord.svg'

const Parent = () => {

    const navigate = useNavigate()
    const [selectedId, setSelectedId] = useState('')

    const handleServerId = (id) => {
        setSelectedId(id)
        navigate(`/server/${id}`)
    }

    const handleGoHome = () => {
      navigate('/')
    }

    const user = serverBtn.User;
    const server = user.servers;

    const button = server.map((item) => {
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
      </div>
      <div className='nestedRoutes'>
        <Outlet />
      </div>
    </main>
  )
}

export default Parent
