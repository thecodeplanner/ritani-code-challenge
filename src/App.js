// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Search from './Search'
import UserInfo from './UserInfo'

function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  return (
    <div>
      <header className="App-header">
        GitHub Username Search Engine
      </header>
      <Search setUser={setUser} />
      {user !== null ? <UserInfo username={user.login} name={user.name} followerCount={user.followers}/> : null }
    </div>
  );
}

export default App;
