import React from 'react'
import logo from './images/pokemon-logo.png'

const Header = () => {
  return (
    <>
    <header className='center'>
      <img src={logo} alt='' className='header-image' />
     
    </header>
     <p className='center'><i>Click image to view info</i></p>
     </>
  )
}

export default Header
