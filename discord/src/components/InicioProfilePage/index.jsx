import {useState} from 'react'
import CabeceraInicio from "../cabecera-inicio/cabecera"
import CardList from "../CardList/CardList"
import './index.css'
export const Incio =()=>{

    const [filtro, setFiltro] = useState("")

    return (
        <div className="body">
            <CabeceraInicio setFiltro={setFiltro} filtro={filtro}/>
            <CardList filtro={filtro}/>
        </div>
    )
}