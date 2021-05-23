import { useState, useEffect, Fragment } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

import SignInLogo from '../styles/images/sign-in-logo.jpg'
import { useStateValue } from '../helpers/StateProvider'
const Home = () => {
    const [{ user }, dispatch] = useStateValue()
    const history = useHistory()
    // const [signedIn, setSignedIn ] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [landlordName, setLandlordName] = useState('')
    const [signInOrRegister, setSignInOrRegister ] = useState('signIn')
    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {   
            // if auth is true and logged in then push to dashboard
            dispatch({
                type:'Set_User',
                user: email
            })
            history.push('/dashboard')
        })
        .catch(e => {alert(e.message)
        })
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            //if auth is true and user is created then 
            //push to ./dashboard page 
            dispatch({
                type:'Set_User',
                user: email
            })
            history.push('./dashboard')
        })
        .catch(e => {alert(e.message)
        })
    }
    const handleSubmit = () => {
        if(signInOrRegister === 'signIn'){
            // check the sign in route and push to dashboard
            login()
        }else {
            // send to the register route and push to dashboard 
            register()
        }
    }
    return (
      <div className='container'>
          <form className="signInContainer" onSubmit={() => handleSubmit()}>
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
          <label htmlFor="email">Email
              <input 
              type="email" 
              value={email}
              name='email'
              placeholder='email'
              onChange={(e) => { setEmail(e.target.value)}}
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
          <label htmlFor="email">Email
              <input 
              type="text" 
              value={email}
              name='email'
              placeholder='email'
              onChange={(e) => { setEmail(e.target.value)}}
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
