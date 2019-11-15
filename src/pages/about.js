import React from "react";
import Layout from "../components/layout";


const IndexPage = () => (
  <Layout>
    <div id='about' className='split'>
      <div className='left'>
        <h1>About me</h1>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br></br>
        <p style={{fontWeight: 400, color: '#fff'}}>Tech stack</p>
        <br></br>
        <p style={{ color: '#fff'}}>Front End</p>
        <br></br>
        <p style={{ color: '#fff'}}>Back End</p>
        <br></br>
        <p style={{ color: '#fff'}}>Dev Ops</p>
      </div>
      <div className='right'>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
