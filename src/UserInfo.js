import React, {useState, useEffect} from 'react'
import FollowersList from './FollowersList'
import {Icon, Label, Menu} from 'semantic-ui-react'

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
            <h1 id='foundtext'>Yay! We found @{username}!</h1>
            <img className='photo' src={avatar} />
            <h3 id='foundname'>His/Her name is: {name}</h3>
            <Menu compact>
                <Menu.Item as='a'>
                    <Icon name='users'/>
                Total Followers 
                <Label color='violet' floating>{followerCount}</Label> 
                </Menu.Item>
                </Menu>
            
            {/* <button onClick={handleOnClick}>Show Followers</button> */}
            {followersInfo ? <FollowersList followersInfo={followersInfo} page={page} setNextPage={setNextPage} /> : null }
            
        </div>

    )
}

export default UserInfo