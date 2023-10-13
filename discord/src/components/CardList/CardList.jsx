import Card from "../Card/Card"
import "./CardList.css"
function CardList(){

    const lista=[
        {
            id:1,
            header:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbad15ce51fe5f395/60db79fca37ada0f2ccece67/c099e2f887d48ad25450d441d73a46f5a6454081.png?auto=webp&format=pjpg&width=3840&quality=60",
            avatar:"https://static.vecteezy.com/system/resources/previews/019/763/186/original/valorant-logo-transparent-free-png.png",
            name:"VALORANT",
            description:"The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
            members:1007203,
            onLineMembers:221135
        },
        {
            id:2,
            header:"https://cdn.midjourney.com/639b794b-bc73-4702-a49f-f2f789fa6082/grid_0_640_N.webp",
            avatar:"https://www.n7net.com/wp-content/uploads/2023/06/Midjourney-logo.png",
            name:"Midjourney",
            description:"The official server for Midjourney, a text-to-image AI where your imagination is the only limit",
            members:1150255,
            onLineMembers:15814917
        },
    ]

    return(
        <ul className="lista">
            {lista.map((item)=>{
                return <Card datosCard={item} key={item.id}/>
            })}
        </ul>
    )

}

export default CardList