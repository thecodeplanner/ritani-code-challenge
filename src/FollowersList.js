import Follower from './Follower'

function FollowersList({followersInfo, page, setNextPage}) {

        let followerDetails = followersInfo.map(follower => {
            return (<Follower key={follower.login} name={follower.login} img={follower.avatar_url}/>)
        })

    
        function handleMoreFollowers(){
            setNextPage(page + 1)
            console.log(page)
        }
    return (
        <div>
            {followerDetails}
            {(followersInfo.length < 50) ? null : <button onClick={handleMoreFollowers}>Load More Followers</button>}
            {/* <button onClick={handleMoreFollowers}>Load More Followers</button> */}
          
        </div>
    )

    }
        

export default FollowersList