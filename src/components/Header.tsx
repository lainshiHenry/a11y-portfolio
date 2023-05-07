import React from 'react'
import Title from './Title.tsx'
import TopNavigation from './TopNavigation.tsx'
import logo from '../img/assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className='headerSection'>
        <Title 
          titleDisplayed={true}
          title='Henry Le'
          subtitle='Web Developer'
          logoLocation={logo}
        />
        <TopNavigation />
    </header>
  )
}

export default Header