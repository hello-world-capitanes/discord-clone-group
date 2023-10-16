import { NavBarMenuProfile } from "../NavBarMenuProfile"
import { UserContext } from "../../context/UserContext"
import { useContext , useState} from "react"
import './style.css'

export const Amigos = ()=>{


    const {user} = useContext(UserContext)
    const [filterFriendString, setFilterFriendString] = useState("connected")
    
    

    const filterFriendsHandler =(string)=>{
        const resultado = user.friends.filter(e=> e.state.toLowerCase().includes(string))
        
        return resultado 
    }   


    return (
        <>
            <NavBarMenuProfile filterFriendString={filterFriendString}filterFunction={setFilterFriendString} />
            <input placeholder="Buscar" className="MidlleMenuServerContainer__input" type="search"/>
            <ul className="MidlleMenuServerContainer__li">
                <span>Conectado - {filterFriendsHandler(filterFriendString).length}</span>
                {filterFriendsHandler(filterFriendString).map(e=>

                    <li key={e.id}>
                       
                        <div className="MidlleMenuServerContainer__li__connected">
                            <img 
                                style={{borderRadius: "50%"}} 
                                width={40} 
                                height={40} 
                                src={e.avatar}
                            />
                        </div>
                        <div className="MidlleMenuServerContainer__li__messageConnected">
                            {e.name}
                            <span>En Línea</span>
                        </div>

                    </li>
                )}
            </ul>
        </>
    )
}