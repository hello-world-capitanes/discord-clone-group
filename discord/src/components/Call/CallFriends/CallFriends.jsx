import './index.css'
import Image from '../../Image/Image'
import videoLogo from '../../../assets/video.svg'
import sendLogo from '../../../assets/send.svg'
import tvLogo from '../../../assets/tv.svg'
import micLogo from '../../../assets/mic.svg'
import phoneOffLogo from '../../../assets/phone-off.svg'
import arrowDownLogo from '../../../assets/arrow-down-left.svg'
import userPlusLogo from '../../../assets/user-plus.svg'
import userLogo from '../../../assets/user.svg'
import helpCircleLogo from '../../../assets/help-circle.svg'
import archiveLogo from '../../../assets/archive.svg'
import Button from '../../Button/Button'
function CallFriends({ friends }) {
    function showFriends() {
        return friends.map((element) => 
            <li className='friend-element' key={element.id}>
                <Image className="avatar" link={element.avatar} title={`Avatar de ${element.username}`}></Image>
            </li>
        )
    }
    return (
            <div className='friends-container'>
                <div className="top-bar">
                    <div className='friends'>
                        { showFriends() }
                    </div>
                    <div className='call-elements'>
                    <Button className="without-border"><img src={arrowDownLogo} alt="Logo gift"/> </Button>
                    <Button className="without-border"><img src={userPlusLogo} alt="Logo gift"/> </Button>
                    <Button className="without-border"><img src={userLogo} alt="Logo gift"/> </Button>
                    <input className="input" type="text" name="nombre" placeholder="Buscar" />
                    <Button className="without-border"><img src={archiveLogo} alt="Logo gift"/> </Button>
                    <Button className="without-border"><img src={helpCircleLogo} alt="Logo gift"/> </Button>

                    </div>
                </div>
                <ul className='friends-list'>
                { showFriends() }
                </ul>
                <div className='buttons'>
                <Button className="redondo"><img src={videoLogo} alt="Logo gift"/> </Button>
                <Button className="redondo"><img src={sendLogo} alt="Logo gift"/> </Button>
                <Button className="redondo"><img src={tvLogo} alt="Logo gift"/> </Button>
                <Button className="redondo"><img src={micLogo} alt="Logo gift"/> </Button>
                <Button className="redondo red"><img src={phoneOffLogo} alt="Logo gift"/> </Button>
                </div>
            </div>
    )
}

export default CallFriends
