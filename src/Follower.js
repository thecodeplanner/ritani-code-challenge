function Follower({name, img}) {
    return (
        <div className='ui segment'>
            <h3>@{name}</h3>
            <img className='followerphoto' src={img}></img>
        </div>
    )
}

export default Follower