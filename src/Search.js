import React, {useState} from 'react'

function Search({setUser}) {
    const [username, setUsername] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        // console.log(username)

        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(userData => handleData(userData))


        function handleData(userData){
            if (userData.message === 'Not Found') {
                alert(`User '${username}' not found. Please try again.`)
                e.target.reset()
            }else {
                setUser(userData)
                e.target.reset()
            }
        }

    }
    return (
        <>
        <h1>Find a user ...</h1>
        <form onSubmit ={handleSubmit}>
            <input 
            type='text'
            placeholder='search for username'
            onChange={(e) => setUsername(e.target.value)}>
            </input>
            <input
            type='submit'
            name='search'>
            </input>
        </form>
        </>
    )
}

export default Search 