import './Card.css'

function Card(){
    const datosCard ={
        id:1,
        header:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/0771bc118901577.609295d61bdfb.png",
        avatar:"https://static.vecteezy.com/system/resources/previews/019/763/186/original/valorant-logo-transparent-free-png.png",
        name:"VALORANT",
        description:"The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
        members:1007203,
        onLineMembers:221135
    }

    return (
        <div className="tarjeta">
            <div className="containerHeader">
                <img className='imageHeader' src={datosCard.header}/>
            </div>
            <div className="containerAvatar">
                <img className="imageAvatar" src={datosCard.avatar}/>
            </div>
            <div className="infoContainer">
                <p className='title'><strong>VALORANT</strong></p>
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