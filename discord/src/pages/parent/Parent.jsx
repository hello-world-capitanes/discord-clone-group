import React from 'react'
import serverBtn from '../../assets/userdb.json'
import { Outlet } from 'react-router-dom';
import Button from '../../components/button/Button';

const Parent = ({
    handleServerId,
    selectedId
}) => {

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
        {button}
      </div>
      <div className='menuPanel'></div>
      <div className='blue'>
        <Outlet selectedId={selectedId} />
      </div>
    </main>
  )
}

export default Parent
