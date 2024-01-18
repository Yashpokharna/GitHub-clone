import React from 'react'
// import githubicon from './githubicon.png'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {
  return (
    <div className='mt-0 flex '>
        <div>
            <DehazeIcon />
        </div>
        <div> Dashboard </div>
    </div>
  )
}

export default Navbar