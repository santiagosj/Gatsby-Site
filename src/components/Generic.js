import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';

import Header from '../components/Header';

const GenericComponent = ({title, description, imageData}) => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">{title} </h1>
          <span className="image fit">
             <img src={imageData} alt={title}/>
          </span>
          <p>{description}</p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default GenericComponent;