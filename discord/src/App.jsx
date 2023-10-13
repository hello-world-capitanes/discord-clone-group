import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userData from './assets/userdb.json'
import Call from './components/Call/Call'
import { UserContext } from './context/UserContext'


function App() {
  const [count, setCount] = useState(0)
  const userFriends = userData.User.friends
  return (
    <>
      <Call friends={[userFriends[0], userFriends[1]]}/>
    </>
  )
}

export default App
