import React, { useState, useEffect } from 'react'
import FollowersList from './FollowersList'
import { Icon, Label, Menu } from 'semantic-ui-react'

function UserInfo({ username, name, followerCount, avatar, setUser }) {
    const [followersInfo, setFollowersInfo] = useState(null)
    const [page, setNextPage] = useState(1)

    //whenever page or username changes, we can reload page and info for user's followers
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/followers?page=${page}&per_page=50`)
            .then(res => res.json())
            .then(data => setFollowersInfo(data))
    }, [page, username])

    return (
        <div className='userinfo'>
            <h1 id='foundtext'>Yay! We found @{username}!</h1>
            <img className='photo' src={avatar} />
            <div>
                <a className='link' target='_blank' href={'https://github.com/' + username}> view profile </a>
            </div>
            <h3 id='foundname'>His/Her name is: {name}</h3>
            <Menu compact>
                <Menu.Item as='a'>
                    <Icon name='users' />
                    Total Followers
                    <Label color='violet' floating>{followerCount}</Label>
                </Menu.Item>
            </Menu>
            {followersInfo ? <FollowersList followersInfo={followersInfo} page={page} setNextPage={setNextPage} setUser={setUser} /> : null}
        </div>

    )
}

export default UserInfo