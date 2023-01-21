import React from 'react';
import "./Home.css";
import logo from "./images/logol.png";

const Home = () => {
  return (
    <div className='home'>
       <nav className='navbar'>
        <div class="nav1">
            <img src={logo}/>
            <p>OUR STORY</p>
            <p>PHOTO ALBUM</p>
            <p>CONTACT</p>
            <p>MENU</p>
        </div>
        <div className='nav2'>
            <p>DIRECTION</p>
        </div>
       </nav>
       <section className='hero'>
          <div className='hero-txt'>
            <p>LIVE</p>
            <p>THE</p>
            <p>LOVE</p>
            <button>GET STARTED</button>
          </div>

          <div className='hero-dd'>
          <div className='hero-div sec1'>

          </div>
          <p className='hero-p'>01.</p>
          <div className='hero-memo'>
          <h4>--24 SEP,1990--</h4>
          <h5>THE DAY WE MET</h5>
          </div>
          </div>

          <div className='hero-dd'>
          <div className='hero-div sec2'>

          </div>
          <p className='hero-p'>02.</p>
          <div className='hero-memo'>
          <h4>--18 JUN,1995--</h4>
          <h5>STORIES OPENNING</h5>
          </div>
          </div>
          <div className='hero-dd'>
          <div className='hero-div sec3'>

          </div>
          <p className='hero-p'>03.</p>
          <div className='hero-memo'>
          <h4>--22 AUG,2002--</h4>
          <h5>THE NEXT JOURNEY</h5>
          </div>
          </div>

       </section>
    </div>
  )
}

export default Home