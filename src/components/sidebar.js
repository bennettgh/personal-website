import PropTypes from "prop-types"
import React from "react"

import Home from '../icons/home-1.svg';
import About from '../icons/user.svg';
import Skills from '../icons/controls-6.svg';
import Work from '../icons/settings-5.svg';
import Mail from '../icons/paper-plane-1.svg';

import Linkedin from '../icons/linkedin.svg';
import Github from '../icons/github.svg';

import { Link } from "gatsby";


const Sidebar = ({ siteTitle, location }) => {

  const active = location.pathname.split('/')[1];

  return (
    <div id='sidebar' >
      <div className='logo'></div>
      <div className='nav'>
        <Link className='icon-container' to="/">
          <Home className={`icon ${active === ('') && 'active'}`}/>
        </Link>

        <Link className='icon-container' to="/about/">
          <About className={`icon ${active === 'about' && 'active'}`}/>
        </Link>
        
        <Link className='icon-container' to="/skills/">
          <Skills className={`icon ${active === 'skills' && 'active'}`}/>
        </Link>
        
        <Link className='icon-container' to="/work/">
          <Work className={`icon ${active === 'work' && 'active'}`}/>
        </Link>
        
        <Link className='icon-container' to="/contact/">
          <Mail className={`icon ${active === 'contact' && 'active'}`}/>
        </Link>
      </div>

      <div className='social'>
        <a className='icon-container' href="https://www.linkedin.com/in/andrew-bennett-aa3412197/">
          <Linkedin className='icon' />
        </a>
        <a className='icon-container' href="https://github.com/bnaut">
          <Github className='icon' />
        </a>
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
