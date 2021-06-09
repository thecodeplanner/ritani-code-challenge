function Follower({name, img}) {
    return (
        <div id='followerdiv' className='ui segments'>
            <h2 id='followerusername'>@{name}</h2>
            <img className='followerphoto' alt='follower avatar photo' src={img}></img>
        </div>
    )
}

export default Follower