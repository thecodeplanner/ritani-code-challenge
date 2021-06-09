import Follower from './Follower'

function FollowersList({followersInfo, page, setNextPage, handleNextPage}) {

        let followerDetails = followersInfo.map(follower => {
            return (<Follower key={follower.login} name={follower.login} img={follower.avatar_url}/>)
        })
    
        function handleMoreFollowers(){
            setNextPage(page + 1)
            handleNextPage()
        }
    return (
        <div>
            {followerDetails}
            <button onClick={handleMoreFollowers}>Load More Followers</button>
          
        </div>
    )

    }
        

export default FollowersList