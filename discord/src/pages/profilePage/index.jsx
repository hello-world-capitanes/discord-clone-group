

import { useState } from "react"
/* import { NavBarMenuServer } from "../../components/NavBarMenuServer" */
import { SideBarMenuProfile } from "../../components/SideBarMenuProfile"
import { MiddleMenuProfile } from "../../components/MiddleMenuProfile"
import { Amigos } from "../../components/AmigosProfilePage"
import { Tienda } from "../../components/TiendaProfilePage"
import { Incio } from "../../components/InicioProfilePage"


export const ProfilePage = ({friends})=>{

    const [currentPage, setCurrentPage] = useState("Amigos")


    const changeCurrentPage = (newCurrentPage)=>{
        setCurrentPage(newCurrentPage)
    }

    return (
        <div style={{margin:0}}>
            
            <section style={{display: "grid", gridTemplateColumns: "15% 95%"}}>
                <SideBarMenuProfile friends={friends} changeCurrentPage={changeCurrentPage}/>
                <MiddleMenuProfile>
                     {currentPage == "Inicio" ? <Incio/> : currentPage == "Tienda" ? <Tienda/> : <Amigos />}
                </MiddleMenuProfile> 
            </section>
            
        </div>
    )
}
