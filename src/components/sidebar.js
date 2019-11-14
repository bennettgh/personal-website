import PropTypes from "prop-types"
import React from "react"

import Home from '../icons/home-1.svg';
import About from '../icons/user.svg';
import Skills from '../icons/controls-6.svg';
import Work from '../icons/settings-5.svg';
import Mail from '../icons/paper-plane-1.svg';

import { Link } from "gatsby";


const Sidebar = ({ siteTitle, location }) => {

  const active = location.pathname.split('/')[1];

  return (
    <div id='sidebar' >
      <div className='nav'>
        <Link to="/"><div className='icon-container'>
          <Home className={`icon ${active === ('') && 'active'}`}/>
        </div></Link>

        <Link to="/about/"><div className='icon-container'>
          <About className={`icon ${active === 'about' && 'active'}`}/>
        </div></Link>
        
        <Link to="/skills/"><div className='icon-container'>
          <Skills className={`icon ${active === 'skills' && 'active'}`}/>
        </div></Link>
        
        <Link to="/work/"><div className='icon-container'>
          <Work className={`icon ${active === 'work' && 'active'}`}/>
        </div></Link>
        
        <Link to="/contact/"><div className='icon-container'>
          <Mail className={`icon ${active === 'contact' && 'active'}`}/>
        </div></Link>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
