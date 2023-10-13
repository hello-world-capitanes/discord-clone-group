import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './context/UserContext'
import FriendSelector from './components/FriendSelector/FriendSelector'

function App() {

  const {user, changeState} = useContext(UserContext) 

  return (
    <>
      <FriendSelector />
    </>
  )
}

export default App
