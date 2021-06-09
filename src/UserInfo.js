import React, {useState} from 'react'
import FollowersList from './FollowersList'

function UserInfo({username, name, followerCount}) {
    const [followersInfo, setFollowersInfo] = useState(null)

    function handleOnClick() {
        fetch(`https://api.github.com/users/${username}/followers`)
            .then(res => res.json())
            .then(data => setFollowersInfo(data))
        
    }

    console.log(followersInfo)

    
    return (
        <div>
            <h1>GitHub Handle: {username}</h1>
            <h2>Name: {name}</h2>
            <h2>Total Followers: {followerCount}</h2>
            <div>
                <button onClick={handleOnClick}>Show Followers</button>
                {followersInfo ? <FollowersList followersInfo={followersInfo}/> : null }
            </div>
        </div>

    )
}

export default UserInfo