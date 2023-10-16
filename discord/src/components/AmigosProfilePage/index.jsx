import { NavBarMenuProfile } from "../NavBarMenuProfile"
import { UserContext } from "../../context/UserContext"
import { useContext , useState} from "react"
import './style.css'

export const Amigos = ()=>{


    const {user} = useContext(UserContext)
    const [filterFriendString, setFilterFriendString] = useState("connected")
    const [searchData, setSearchData] = useState([])
    const [showTableSearch, setShowTableSearch] = useState(false)
    
    const searchFriendsHandler = (e)=>{
        
        const resultado = filterFriendsHandler(e.target.value)

        setSearchData([...resultado])
    }
    const filterFriendsHandler =(string, select)=>{
        let resultado

        if (select){

            resultado = user.friends.filter(e=> e.state.toLowerCase().includes(string.toLowerCase()))
        }else {
            resultado = user.friends.filter(e=> e.name.toLowerCase().includes(string.toLowerCase()) || e.username.toLowerCase().includes(string.toLowerCase()))
        }
        
        return resultado 
    }   


    return (
        <>
            <NavBarMenuProfile filterFriendString={filterFriendString} filterFunction={setFilterFriendString} />
            <input onChange={searchFriendsHandler} placeholder="Buscar" className="MidlleMenuServerContainer__input" type="search"/>
            <div className="MidlleMenuServerContainer__input__tableSearch">
                {searchData.map(e=> 
                    (
                        <strong>{e.name}</strong>
                    ))}
            </div>
            <ul className="MidlleMenuServerContainer__li">
                <span>Conectado - {filterFriendsHandler(filterFriendString, true).length}</span>
                {filterFriendsHandler(filterFriendString, true).map(e=>

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