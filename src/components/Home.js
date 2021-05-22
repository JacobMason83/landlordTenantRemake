import { useState, useEffect } from 'react'
import SignInLogo from '../styles/images/sign-in-logo.jpg'
const Home = () => {

    // const [signedIn, setSignedIn ] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword ] = useState('')
    return (
      <div className='container'>
          <form className="signInContainer">
          <div className="image-wrapper">
            <img src={SignInLogo} alt="signInPicture" />
          </div>
          <div className="input-wrapper">
              <input 
              type="text" 
              value={username}
              placeholder='username'
              onChange={(e) => { setUsername(e.target.value)}}
               />
              <input 
              type="password" 
              value={password}
              placeholder='password'
              onChange={(e) =>  setPassword(e.target.value)}
               />
          </div>
          <button type='submit' className='sign-btn'>Sign In</button>
          </form>
      </div>
    )
}

export default Home
