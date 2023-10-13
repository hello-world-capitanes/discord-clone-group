import React, { useEffect, useState } from 'react'
import serverBtn from '../../assets/userdb.json'
import { useParams } from 'react-router-dom';

const ServerDetail = () => {

    const user = serverBtn.User;
    const server = user.servers;
    const { serverid } = useParams()
    const [selectedServer, setSelectedServer] = useState({
        "id": "6526617ed677d55a040a8334",
        "name": "Jillian_Cherry",
        "avatar": "https://picsum.photos/32/32"
      })
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        if(serverid) {
            const findServer = server.find((item) => item.id === serverid)
            setSelectedServer(findServer)
        }
    }, [serverid])

    useEffect(() => {

        console.log('selectedServer', selectedServer);

        if(selectedServer) {
            setAvatar(selectedServer.avatar);
            setName(selectedServer.name.replace('_', ' '))
        }

    }, [selectedServer])

    console.log('primero', server[0])
    console.log('selected',selectedServer)

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
