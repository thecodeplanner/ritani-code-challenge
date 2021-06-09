import React, {useState} from 'react'
import Search from './Search'
import UserInfo from './UserInfo'
import {Icon} from 'semantic-ui-react'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div >
      <header> <Icon name='github' /> GitHub Username Finder </header>
      <Search setUser={setUser} />
      {user !== null ? <UserInfo username={user.login} name={user.name} avatar={user.avatar_url}followerCount={user.followers} setUser={setUser}/> : null }
    </div>
  );
}

export default App;