import defaultUser from '../assets/userdb.json'
import { createContext, useState } from "react"


const UserContext = createContext({ 
  user: {
    id: '',
    name:'',
    username:'',
    avatar:'',
    email:'',
    phone:'',
    state:'',
    friends:[],
    servers:[]
  },
  changeState: () => {} ,
})

export { UserContext }

function UserContextProvider({ children }) {

    const [user,setUser]=useState({
        id: defaultUser.User.id,
        name:defaultUser.User.name,
        username:defaultUser.User.username,
        avatar:defaultUser.User.avatar,
        email:defaultUser.User.email,
        phone:defaultUser.User.phone,
        state:defaultUser.User.state,
        friends:defaultUser.User.friends,
        servers:defaultUser.User.servers
    })

  const changeState = (newState) => {
    setUser({
        ...user,
        state: newState
    })
  }

  const contextValue = { 
    user: user, 
    changeState: changeState
  }


  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }
