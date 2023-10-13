import React, { useEffect, useState } from 'react'
import serverBtn from '../../assets/userdb.json'
import { useParams } from 'react-router-dom';

const ServerDetail = () => {

    const user = serverBtn.User;
    const server = user.servers;
    const { serverid } = useParams()
    const [selectedServer, setSelectedServer] = useState([])

    useEffect(() => {
        if(serverid) {
            const findServer = server.find((item) => item.id === serverid)
            setSelectedServer(findServer)
        }
    }, [serverid, server])

    const avatar = selectedServer.avatar
    const name = selectedServer.name.replace('_', ' ')

  return (
    <div className='serverDetail_container'>
        <div className='serverTitle'>
            <img src={avatar} alt="" />
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default ServerDetail
