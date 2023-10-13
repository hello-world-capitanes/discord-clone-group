import './App.css'
import { useState, useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Routes, Route } from 'react-router-dom'
import Parent from './pages/parent/Parent'
import ServerDetail from './pages/server/ServerDetail'

function App() {

  const {user, changeState} = useContext(UserContext) 

  return (
    <Routes>
      <Route path='/' element={<Parent/>} />
      <Route path='/server/' element={<Parent/>}>
        <Route path=':serverid' element={<ServerDetail/>} />
      </Route>
    </Routes>
  )
}

export default App
