import './style.css'

export const NavBarMenuProfile =()=>{



    return (
       <nav className='NavBarMenuServer__nav'>
            
            <ul className='NavBarMenuServer__nav__menu'>
                <li>
                    Amigos
                </li>
                <li>En línea</li>
                <li>Todos</li>
                <li>Pendiente</li>
                <li>Añadir Amigo</li>
            </ul>
            <ul className='NavBarMenuServer__nav__leftmenu'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </ul>
       </nav>
    )
}