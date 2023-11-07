import React from 'react'
import style from './home.css';

const Home = () => {
  return (
    <>
        <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Diet-plans</a></li>
            <li><a href="/">Pro-plans</a></li>
            <li><a href="/">Services</a></li>
        </nav>

        <div className="home-container">
        <img src="/images/bg.jpg" alt="Background" className="background-image" />
        <div className="text-overlay">
          <h1>PRO's AT WORK.</h1>
          <p className='text'>We prioritize action over words; our gym exemplifies this commitment through dedicated hard work and achievement in every endeavor.</p>
        </div>
        </div>
    </>
  )
}

export default Home