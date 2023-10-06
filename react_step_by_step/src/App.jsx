import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserCOntextProvider';

function App () {
    
    return (
        <UserContextProvider>
            <h1>React with Chai & share is Important</h1>
            <Login />
            <Profile/>
      </UserContextProvider>
  )
}

export default App