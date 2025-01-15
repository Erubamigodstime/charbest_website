// import { useState } from 'react'
import Header from './components/Header';
import './index.css';
import Connect from './components/Connect';
import Cargo from './components/Cargo';
import Offer from './components/Offer.';
import Discover from './components/Discover';
import Txt from './components/Txt';
import ClientStories from './components/ClientStories.jsx';
import {stories} from './ClientData.jsx'
import Produce from './components/Produce.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
    <Header />
    <Connect/>
    <Cargo/>
    <Txt text={'What we Offer'}/>
    <Offer/>
    <Discover/>
    <Txt text={'What Our Clients Say'}/>
    <ClientStories stories={stories} /> 
    <Txt text={'Our Fresh Produce'}/>
     <p style={{textAlign: 'center',
      marginBottom: '50px',
      fontSize: '1.5rem'
     }}> Explore our diverse range of agricultural products, carefully sourced to meet the highest standards of quality and freshness. </p>
    <Produce/>
    <Txt text={'Contact'}/>
    <Contact/>
    <Footer/>
   

     
    </>
   
  )
}

export default App
