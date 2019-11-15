import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from '../components/atomic/button';
import Caution from '../icons/warning.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id='home' className='split'>
      <div className='left'>
        <h1 className='home-title'>Hello,</h1>
        <h1>I'm Andrew Bennett,</h1>
        <h1>Full Stack Developer.</h1>
        <p>Currently working at: <a href='https://transparentkitchen.com'>Transparent Kitchen</a></p>
        <Button text='CONTACT ME'></Button>
      </div>
      <div className='right'>
        <div className='caution-container'>
          <Caution className='caution' />
          <p>This website is currently</p>
          <p>under construction :)</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
