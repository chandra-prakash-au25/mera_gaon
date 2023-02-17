import React from 'react'
import "./nav.css";
import banner from './baner.jpg'
const Home = () => {
  return (
    <div className='home'>
      <img className='home' src={banner}/>
      <img className='home' src={banner}/>
    </div>
  )
}

export default Home