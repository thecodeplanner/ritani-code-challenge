import React, {useState, useEffect} from 'react'
import FollowersList from './FollowersList'

function UserInfo({username, name, followerCount, avatar}) {
    const [followersInfo, setFollowersInfo] = useState(null)
    const [page, setNextPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/followers?page=${page}&per_page=50`)
        .then(res => res.json())
        .then(data => setFollowersInfo(data))
    },[page,username])

    // console.log(page)

    
    return (
        <div className='userinfo'>
            <h1>Yes! We found @{username}!</h1>
            <img className='photo' src={avatar} />
            <h2>His/Her name is: {name}</h2>
            <h3>Total Followers: {followerCount}</h3>
            
            {/* <button onClick={handleOnClick}>Show Followers</button> */}
            {followersInfo ? <FollowersList followersInfo={followersInfo} page={page} setNextPage={setNextPage} /> : null }
            
        </div>

    )
}

export default UserInfo