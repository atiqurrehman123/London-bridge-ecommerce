import React from 'react'
import FirstNAvbar from './Navbars/FirstNAvbar'
import SecondNavbar from './Navbars/SecondNavbar'
import ThirdNavbar from './Navbars/ThirdNavbar'
import { useMediaQuery } from '@mui/material'
const Header = () => {
      const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      {/* First Navbar */}
      <FirstNAvbar/>
      {/* Second Navbar */}
      <SecondNavbar/>
      {/* Third Navbar */}
        {matches&&
        <ThirdNavbar/>}
    </div>  
  )
}

export default Header