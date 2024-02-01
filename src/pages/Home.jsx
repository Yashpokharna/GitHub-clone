import React from 'react'
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Middle from '../components/Middle'
import Rightbar from '../components/Rightbar'

const Home = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='flex'>
        
      <LeftSidebar/>
      <Middle/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Home