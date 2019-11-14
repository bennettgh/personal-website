import PropTypes from "prop-types"
import React from "react"

import Home from '../icons/home-1.svg';
import About from '../icons/user.svg';
import Settings from '../icons/settings-5.svg';
import Mail from '../icons/paper-plane-1.svg';
import App from '../icons/controls-6.svg';


const Sidebar = ({ siteTitle }) => (
  <sidebar id='sidebar' >
    <div class='nav'>
      <div class='icon-container'><Home class='icon active'/></div>
      <div class='icon-container'><About class='icon'/></div>
      <div class='icon-container'><Settings class='icon'/></div>
      <div class='icon-container'><App class='icon'/></div>
      <div class='icon-container'><Mail class='icon'/></div>
    </div>
  </sidebar>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
