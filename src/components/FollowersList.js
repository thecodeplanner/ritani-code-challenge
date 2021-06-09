import Follower from './Follower'
import { Button } from 'semantic-ui-react'

function FollowersList({ followersInfo, page, setNextPage, setUser }) {

    let followerDetails = followersInfo.map(follower => {
        return (<Follower key={follower.login} name={follower.login} img={follower.avatar_url} setUser={setUser} />)
    })

    //function to handle loading more followers and load next page of followers
    function handleMoreFollowers() {
        setNextPage(page + 1)
    }
    return (
        <>
            <div className='ui centered grid' id='followerslist'>
                {followerDetails}
            </div>
            <div>
                {(followersInfo.length < 50) ? null : <Button basic color='violet' onClick={handleMoreFollowers}>Load More Followers</Button>}
            </div>
        </>
    )

}

export default FollowersList