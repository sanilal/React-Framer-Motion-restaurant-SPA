import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';



const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2'>
     <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
     </div>
    </div>
  )
}

export default App