import './App.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Parent from './pages/parent/Parent'
import ServerDetail from './pages/server/ServerDetail'

function App() {

    const navigate = useNavigate()
    const [selectedId, setSelectedId] = useState('')

    const handleServerId = (id) => {
        setSelectedId(id)
        navigate(`/server/${id}`)
        
    }

  return (
    <Routes>
      <Route path='/' element={<Parent handleServerId={handleServerId} selectedId={selectedId}/>} />
      <Route path='/server/' element={<Parent handleServerId={handleServerId} selectedId={selectedId}/>}>
        <Route path=':serverid' element={<ServerDetail selectedId={selectedId} />} />
      </Route>
    </Routes>
  )
}

export default App
