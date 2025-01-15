import  { useState } from "react";
import logo from '../assets/charbest.svg'
import BookNow from './BookNow'
import './hamburger.css'

const Header = () => {
  const [isclicked, setIsclicked] = useState(false)
  

  function handleClick() {
    setIsclicked(!isclicked)

    
  }

  return (
    <header>
        <img src={logo} alt=" logo Image" />
        <div className={`navlist ${isclicked ? 'hamburger-active' : 'hamburger-inactive'}`}>
        <nav className="mobile_nav" >         
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Why Us</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">contact Us</a> </li>
            </ul>
        </nav>       
        </div>
        <div className="not_visible">
        <BookNow/>

        </div>
         <div onClick={handleClick} className={`hamburger burger_container ${isclicked ? 'active' : ''}`}>
          {!isclicked ?<span>&#9776;</span> : <span>&#10006;</span>}
          </div>
        
      
    </header>
  )
}

export default Header
