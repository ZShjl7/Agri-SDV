import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import About from '../components/About';

export default function main() {
  return (
   <>
   <Navbar />
   <Home />
   <div style={{marginTop:'40px'}}>
   <About />
   </div>
   
   </>

  )
}
