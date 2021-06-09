import React, {useState, useEffect} from 'react'
import FollowersList from './FollowersList'

function UserInfo({username, name, followerCount}) {
    const [followersInfo, setFollowersInfo] = useState(null)
    const [page, setNextPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/followers?page=${page}&per_page=50`)
        .then(res => res.json())
        .then(data => setFollowersInfo(data))
    },[page,username])

    console.log(page)

    
    return (
        <div>
            <h1>GitHub Handle: {username}</h1>
            <h2>Name: {name}</h2>
            <h2>Total Followers: {followerCount}</h2>
            
            {/* <button onClick={handleOnClick}>Show Followers</button> */}
            {followersInfo ? <FollowersList followersInfo={followersInfo} page={page} setNextPage={setNextPage} /> : null }
            
        </div>

    )
}

export default UserInfo