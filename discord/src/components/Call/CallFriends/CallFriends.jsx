import './index.css'
import Image from '../../Image/Image'

function CallFriends({ friends }) {
    return (
            <div className='friends-container'>
                <ul className='friends-list'>
                {
                friends.map((element) => 
                    <li className='friend-element' key={element.id}>
                        <Image className="avatar" link={element.avatar} title={`Avatar de ${element.username}`}></Image>
                    </li>
                    )
                }
                </ul>
                <div className='buttons'>

                </div>
            </div>
    )
}

export default CallFriends
