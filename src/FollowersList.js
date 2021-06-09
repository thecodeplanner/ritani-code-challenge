import Follower from './Follower'

function FollowersList({followersInfo}) {

        let followerDetails = followersInfo.map(follower => {
            return (<Follower key={follower.login} name={follower.login} img={follower.avatar_url}/>)
        })
    
    return (
        <div>
            {followerDetails}
          
        </div>
    )

    }
        

export default FollowersList