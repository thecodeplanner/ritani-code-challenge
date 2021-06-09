// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Search from './Search'
import UserInfo from './UserInfo'
import {Icon} from 'semantic-ui-react'

function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <div>
      <header>
      <Icon name='github' /> GitHub Username Finder  
      </header>
      <Search setUser={setUser} />
      {user !== null ? <UserInfo username={user.login} name={user.name} followerCount={user.followers}/> : null }
    </div>
  );
}

export default App;
