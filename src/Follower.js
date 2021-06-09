function Follower({name, img}) {
    return (
        <div className='ui segments'>
            <h3>@{name}</h3>
            <img className='followerphoto' src={img}></img>
        </div>
    )
}

export default Follower