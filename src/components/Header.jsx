import React from 'react'
import FirstNAvbar from './Navbars/FirstNAvbar'
import SecondNavbar from './Navbars/SecondNavbar'
import ThirdNavbar from './Navbars/ThirdNavbar'

const Header = () => {
  return (
    <div>
      {/* First Navbar */}
      <FirstNAvbar/>
      {/* Second Navbar */}
      <SecondNavbar/>
      {/* Third Navbar */}
      <ThirdNavbar/>
    </div>
  )
}

export default Header