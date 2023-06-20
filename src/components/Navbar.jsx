import React from 'react'
import NavLogo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
<nav>
    <div className="left-nav-container">
        <img src={NavLogo} alt="logo" />
    </div>
    <div className="right-nav-container">
    <ul className='nav-items'>
        <li>  <>Products</>   </li>
        <li> <>Solutions</>  </li>
        <li> <>Pricing</>  </li>
        <li> <>Resources</>  </li>
        <li> <>Support</>  </li>
    </ul>
    <div className="nav-btns">
    <button className='nav-sign-in'>Sign in</button>
    <button className='nav-start'>Get Started</button>
    </div>
   
    </div>
    
</nav>
    </>
  )
}

export default Navbar