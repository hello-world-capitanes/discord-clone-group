
import './cabecera.css'



function Header () {
    return (
        <div className="header">
            <div className="content">
                <h1> Encuentra tu comunidad en Discord </h1>
                <p> Desde juegos, a música y enseñanza, aquí encontrarás tu sitio</p>
                <input type="text" placeholder="Explora comunidades" className="search-input" />
            </div>
         </div>
    )
}

export default Header 