import { useState, useEffect, Fragment } from 'react'
import SignInLogo from '../styles/images/sign-in-logo.jpg'
const Home = () => {

    // const [signedIn, setSignedIn ] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword ] = useState('')
    const [landlordName, setLandlordName] = useState('')
    const [signInOrRegister, setSignInOrRegister ] = useState('signIn')
    const handleSubmit = () => {
        if(signInOrRegister === 'signIn'){
            // check the sign in route and push to dashboard
        }else {
            // send to the register route and push to dashboard 
        }
    }
    return (
      <div className='container'>
          <form className="signInContainer" onSubmit={handleSubmit}>
          <div className="switch">
          <h3 onClick={() => setSignInOrRegister('signIn')} className='signIn'>Sign In</h3>
          <h3 onClick={() => setSignInOrRegister('register')} className='register'>Register</h3>
      </div>
      {signInOrRegister === 'signIn'? (
          <Fragment>
          <div className="image-wrapper">
            <img src={SignInLogo} alt="signInPicture" />
          </div>
          <div className="input-wrapper">
          <label htmlFor="username">Username
              <input 
              type="text" 
              value={username}
              name='username'
              placeholder='username'
              onChange={(e) => { setUsername(e.target.value)}}
               />
               </label>
               <label htmlFor="password">Password
              <input 
              type="password" 
              name='password'
              value={password}
              placeholder='password'
              onChange={(e) =>  setPassword(e.target.value)}
               />
               </label>
          </div>
          <button type='submit' className='sign-btn'>Sign In</button>
          </Fragment>
      ) : (
          <Fragment>
        <div className="image-wrapper">
            <img src={SignInLogo} alt="signInPicture" />
          </div>
          <div className="input-wrapper">
          <label htmlFor="landlordName">Company 
              <input 
              type="text" 
              name='landlordName'
              value={landlordName}
              placeholder='Company Name'
              onChange={(e) =>  setLandlordName(e.target.value)}
               />
               </label>
          <label htmlFor="username">Username
              <input 
              type="text" 
              value={username}
              name='username'
              placeholder='username'
              onChange={(e) => { setUsername(e.target.value)}}
               />
               </label>
               <label htmlFor="password">Password
              <input 
              type="password" 
              name='password'
              value={password}
              placeholder='password'
              onChange={(e) =>  setPassword(e.target.value)}
               />
               </label>
         
          </div>
          <button type='submit' className='sign-btn'>Register</button>
          </Fragment>
      )}
          </form>
      </div>
    )
}

export default Home
