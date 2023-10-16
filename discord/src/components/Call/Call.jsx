import './index.css'
import CallFriends from './CallFriends/CallFriends'
import CallChat from './CallChat/CallChat'
function Call({ friends }) {

    return (
        <div className='call-container'>
            <CallFriends friends={friends} />
            <CallChat />
        </div>
    )
}

export default Call
