import { Link } from "react-router-dom"

const Header = () => {
    return (
    <nav className="header">
    <div className="nav-wrapper">
        <ul className="left-side">
          <Link className='links'><li className="nav-links">Home</li></Link>
            <Link className='links'><li className="nav-links">Pay</li></Link>
            <Link className='links'><li className="nav-links">Maitanence Requests</li></Link>
            <Link className='links'><li className="nav-links">Messages</li></Link>
            <Link className='links'><li className="nav-links">Properties List</li></Link>
        </ul>
    <div className="right-side">
        <h3>Hi from #username</h3>
        <button className="sign-out-btn">Sign Out</button>
    </div>
    </div> 
    </nav>

    )
}

export default Header 