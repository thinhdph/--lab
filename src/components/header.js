import React, { Component } from 'react';
<<<<<<< HEAD
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 import { faSun } from '@fortawesome/free-solid-svg-icons';
 import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

export default function Header() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
      //   <div className='header'>
      //     <nav>
      //       <ul className='header-menu'>
      //         <img className='logo' src='https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900' alt='app xem phim'/>
      //       <li className='home'> <a className='active' href='#home'>Home </a> </li>
      //       <li className='new'> <a href='#new'> New</a></li>
      //       <li className='about'> <a href='#about'> About</a></li>
      //       <li className='contact'> <a href='#contact'> Contact</a></li>
      //        <form className='search-bar'>
      //         <input  className='search' type='text' placeholder='Tìm tên phim...' name='keyword' />
      //         <FontAwesomeIcon icon={faMagnifyingGlass} />
      //         </form>
      //       </ul>
      //     </nav>
      //   </div>
      <nav>
        <div class="nav-wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><Link to={'/src/components/contact.js'}>Contact</Link></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
          <div style={{ position: 'relative' }}>
            <a className='switch-mode' href='#' onClick={toggle} class=" right "
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: 'none'
              }} data-testid="toggle-theme-btn"
            >
             {!dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} /> } 
            </a>
          </div>
        </div>
      </nav>
    )
  }
=======
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

>>>>>>> 6a701b21e8c9460d66d55b9388e51b0c94ef6658
