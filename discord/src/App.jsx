import './App.css'
import { Routes, Route } from 'react-router-dom'
import Parent from './pages/parent/Parent'
import ServerDetail from './pages/server/ServerDetail'
import { ProfilePage } from './pages/profilePage'
import userData from './assets/userdb.json'
import { UserContext } from './context/UserContext'
import { useContext } from 'react'

function App() {



    const {user, changeState} = useContext(UserContext)

  return (
    
    <Routes>
      <Route path='/' element={<Parent/>}>
      <Route path='profile' element={<ProfilePage friends={user.friends}/>}/>
        </Route>
      <Route path='/server/' element={<Parent/>}>
        <Route path=':serverid' element={<ServerDetail/>} />
      </Route>
    </Routes>
  )
}

export default App
