import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Parent from './pages/parent/Parent'
import ServerDetail from './pages/server/ServerDetail'

function App() {

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
