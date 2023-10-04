import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from './context';
export default function Header() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul className='header-menu' >
          <img className='logo' src='https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900' alt='app xem phim' />
          <li className='home'> <a  style={{color: theme.color}} className='active' href='#home'>Home </a> </li>
          <li className='new'> <a  style={{color: theme.color}} href='#new'> New</a></li>
          <li className='about'> <a style={{color: theme.color}} href='#about'> About</a></li>
          <li className='contact'> <a style={{color: theme.color}} href='#contact'> Contact</a></li>
        </ul>
        <form className='search-bar'>
          <input className='search' type='text' placeholder='Tìm tên phim...' name='keyword' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
        <div style={{ position: 'relative' }}>
          <a className='switch-mode' href='#' onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }} data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  )
}

