import { useContext, useState } from "react"
import { NavBarMenuProfile } from "../NavBarMenuProfile"
import { UserContext } from "../../context/UserContext"
import './style.css'



export const MiddleMenuProfile = ({children})=>{

    
    return (
        <div className="MidlleMenuServerContainer">
            {children}
        </div>
    )
}