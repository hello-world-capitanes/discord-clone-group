
import './cabecera.css'
import lupaImagen from './search.svg'


function Header ({setFiltro, filtro}) {

    const handleChange = (e) => {
        setFiltro(e.target.value);
    };

    return (
        <div className="header">
            <div className="content">
                <h1> Encuentra tu comunidad en Discord </h1>
                <p> Desde juegos, a música y enseñanza, aquí encontrarás tu sitio</p>
                <input type="text" name="filtro" value={filtro} placeholder="Explora comunidades" onChange={handleChange} className="search-input" />
            </div>
         </div>
    )
}

export default Header 