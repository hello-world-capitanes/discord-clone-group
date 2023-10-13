import { useContext, useState } from "react"
import { NavBarMenuProfile } from "../NavBarMenuProfile"
import { UserContext } from "../../context/UserContext"




export const MiddleMenuProfile = ()=>{

    const {user} = useContext(UserContext)
    const [filterFriendString, setFilterFriendString] = useState("En línea")

    const filterFriendsHandler =(string)=>{
        const resultado = user.friends.map(e=> e.state.toLowerCase().includes(string))

        return resultado 
    }   

    return (
        <div className="MidlleMenuServerContainer">
            <NavBarMenuProfile filterFunction={setFilterFriendString} />
            <ul>{filterFriendsHandler(filterFriendString).map(e=>
                
                    <li>e.name</li>
                )}
            </ul>
        </div>
    )
}