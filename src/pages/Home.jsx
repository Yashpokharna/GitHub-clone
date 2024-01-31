import React from 'react'
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Middle from '../components/Middle'

const Home = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='flex'>
      <LeftSidebar/>
      <Middle/>
      </div>
    </div>
  )
}

export default Home