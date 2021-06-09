function Follower({name, img, setUser}) {

    //passed down setUser so that when we click a follower, we can rerender page and see info about follower
    function handleOnClick() {
        fetch(`https://api.github.com/users/${name}`)
        .then(res => res.json())
        .then(userData => setUser(userData))
    }
    return (
        <div id='followerdiv' className='ui segments' onClick={handleOnClick}>
            <h2 id='followerusername'>@{name}</h2>
            <img className='followerphoto' alt='follower avatar photo' src={img}></img>
        </div>
    )
}

export default Follower