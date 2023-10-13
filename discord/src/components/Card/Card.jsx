import './Card.css'

function Card({datosCard}){


    return (
        <div className="tarjeta">
            <div className="containerHeader">
                <img className='imageHeader' src={datosCard.header}/>
            </div>
            <div className="containerAvatar">
                <img className="imageAvatar" src={datosCard.avatar}/>
            </div>
            <div className="infoContainer">
                <p className='title'><strong>{datosCard.name}</strong></p>
                <p className="description">{datosCard.description}</p>

                <div className="containerMembers">
                    <div className='circulo' style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'green',
                    }}/>
                    <p className='indicadorMiembros'>{datosCard.onLineMembers} en línea</p>
                    <div className='circulo' style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'grey',
                    }}/>
                    <p className='indicadorMiembros'>{datosCard.members} miembros</p>
                </div>
            </div>
        </div>
    )
}

export default Card