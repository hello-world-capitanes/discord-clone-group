import React, { useEffect, useState } from 'react'
import serverBtn from '../../assets/userdb.json'

const ServerDetail = ({
    selectedId
}) => {

    const user = serverBtn.User;
    const server = user.servers;
    const [selectedServer, setSelectedServer] = useState([])

    useEffect(() => {
        if(selectedId) {
            const findServer = server.find((item) => item.id === selectedId)
            setSelectedServer(findServer)
        }
    })

  return (
    <div>
        <span>Server data:</span>
        <span>{selectedServer.name}</span>
        <img src={selectedServer.avatar} alt="" />
    </div>
  )
}

export default ServerDetail
