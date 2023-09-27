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
        <ul className='header-menu' style={{color: theme.color}}>
          <img className='logo' src='https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900' alt='app xem phim' />
          <li className='home' style={{color: theme.color}}> <a className='active' href='#home'>Home </a> </li>
          <li className='new'> <a href='#new'> New</a></li>
          <li className='about'> <a href='#about'> About</a></li>
          <li className='contact'> <a href='#contact'> Contact</a></li>
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

