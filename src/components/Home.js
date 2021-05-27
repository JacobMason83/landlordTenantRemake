import { useState, useEffect, Fragment } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
// importing in images, and provider info
import SignInLogo from '../styles/images/sign-in-logo.jpg'
import { useStateValue } from '../helpers/StateProvider'
import { PicturesCarousel } from '../helpers/PicturesCaroseul'
const Home = () => {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()
  // const [signedIn, setSignedIn ] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [landlordName, setLandlordName] = useState('')
  const [signInOrRegister, setSignInOrRegister] = useState('signIn')
  const [isOpen, setIsOpen] = useState(false)
  const login = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        // if auth is true and logged in then push to dashboard
        dispatch({
          type: 'Set_User',
          user: email
        })
        history.push('/dashboard')
      })
      .catch(e => {
        alert(e.message)
      })
  }
  const register = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //if auth is true and user is created then
        //push to ./dashboard page
        dispatch({
          type: 'Set_User',
          user: auth.email
        })
        history.push('./dashboard')
      })
      .catch(e => {
        alert(e.message)
      })
  }
  const handleSubmit = () => {
    if (signInOrRegister === 'signIn') {
      // check the sign in route and push to dashboard
      login()
    } else {
      // send to the register route and push to dashboard
      register()
    }
  }
  return (
    <div className='container'>
      <div className='home-wrapper'>
        <section className='landingInfo'>
          <div className='header-info'>
            <h1 className='headerTitle'>Landlord Tenant Web Application</h1>
            <h2 className='sub-heading'>
              Brings Landlords and Tenants together all in one place, so that
              communication with each other is easy
            </h2>
            <p className='paragraphInfo'>
              This application will give Landlords a chance to organize their
              properties, and tenants all in one place. Landlords will recieve
              notice of Rental payments, Property List, Messages from Tenants,
              Maitanence Requests, and can track all in real-time. Landlords
              will be able to add Tenants to their account, and Tenants will be
              able to pay rent, message the landlord, and put in maitanence
              requests for their property with picutres, and a description,
              along with a real time tracking system.
            </p>
          </div>
        </section>
        <div
          className='login-animation-container'
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1>
            <span>L</span>
            <span>o</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
          </h1>
          {isOpen ? (
            <Fragment>
              <form className='signInContainer' onSubmit={() => handleSubmit()}>
                <div className='switch'>
                  <h3
                    onClick={() => setSignInOrRegister('signIn')}
                    className='signIn'
                  >
                    Sign In
                  </h3>
                  <h3
                    onClick={() => setSignInOrRegister('register')}
                    className='register'
                  >
                    Register
                  </h3>
                </div>
                {signInOrRegister === 'signIn' ? (
                  <Fragment>
                    <div className='image-wrapper'>
                      <img src={SignInLogo} alt='signInPicture' />
                    </div>
                    <div className='input-wrapper'>
                      <label htmlFor='email'>
                        Email
                        <input
                          type='email'
                          value={email}
                          name='email'
                          placeholder='email'
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                        />
                      </label>
                      <label htmlFor='password'>
                        Password
                        <input
                          type='password'
                          name='password'
                          value={password}
                          placeholder='password'
                          onChange={e => setPassword(e.target.value)}
                        />
                      </label>
                    </div>
                    <button type='submit' className='sign-btn'>
                      Sign In
                    </button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className='image-wrapper'>
                      <img src={SignInLogo} alt='signInPicture' />
                    </div>
                    <div className='input-wrapper'>
                      <label htmlFor='landlordName'>
                        Company
                        <input
                          type='text'
                          name='landlordName'
                          value={landlordName}
                          placeholder='Company Name'
                          onChange={e => setLandlordName(e.target.value)}
                        />
                      </label>
                      <label htmlFor='email'>
                        Email
                        <input
                          type='text'
                          value={email}
                          name='email'
                          placeholder='email'
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                        />
                      </label>
                      <label htmlFor='password'>
                        Password
                        <input
                          type='password'
                          name='password'
                          value={password}
                          placeholder='password'
                          onChange={e => setPassword(e.target.value)}
                        />
                      </label>
                    </div>
                    <button type='submit' className='sign-btn'>
                      Register
                    </button>
                  </Fragment>
                )}
              </form>
            </Fragment>
          ) : null}
        </div>
        <div className='picture-slider'>
          <PicturesCarousel />
        </div>
      </div>
    </div>
  )
}

export default Home
