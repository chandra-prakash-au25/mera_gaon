import React from 'react'
import "./nav.css";
import smsimg from "./download.png"
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
      <img className='img' src={smsimg}/>
      <div className='nav-item'><a className='link' href='/sended'>Sended SMS</a></div>
      <div className='nav-item'><a className='link' href='/contacts'>Contacts</a></div>
      </div>
    </div>
  )
}

export default Navbar