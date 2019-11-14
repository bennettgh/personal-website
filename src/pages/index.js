import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from '../components/atomic/button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id='home' className='split'>
      <div className='left'>
        <h1 className='home-title'>Hello,</h1>
        <h1>I'm Andrew Bennett,</h1>
        <h1>Full Stack Developer.</h1>
        <p> ---- Backend <span className='color'>></span> Frontend <span className='color'>></span> Ops</p>
        <Button text='CONTACT ME'></Button>
      </div>

    </div>
  </Layout>
);

export default IndexPage;
