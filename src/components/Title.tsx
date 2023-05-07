import React from 'react'
import './Title.css'

interface TitleInterface{
  title: string,
  titleDisplayed: boolean,
  subtitle: string,
  logoLocation: string,
}

const Title = ({title = 'Sample Title', titleDisplayed = true, subtitle = 'Sample Subtitle', logoLocation = ''}: TitleInterface) => {
  return (
    <div className='topLeftSection'>
      <div className='logoSection'>
        <img src={logoLocation} alt='Logo'></img>
      </div>
      {titleDisplayed ? 
        <div className='titleSection'>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div> : 
        <div></div>
      }
    </div>
  )
}

export default Title