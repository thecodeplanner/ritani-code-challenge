import React, {useState} from 'react'
import {Form} from 'semantic-ui-react'

function Search({setUser}) {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(userData => handleData(userData))

    //function to handle error if user is not found
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
        <div className='searchbox'>
            <Form onSubmit ={handleSubmit}>
                <Form.Field inline>
                <input 
                    type='text'
                    placeholder='search for username ...'
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                </Form.Field>
                <Form.Button size='tiny' color='violet' content='Find User'/>
            </Form>
        </div>
    )
}

export default Search 