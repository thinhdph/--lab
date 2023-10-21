import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 import { faSun } from '@fortawesome/free-solid-svg-icons';
 import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import'./css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      //       </ul>
      //     </nav>
      //   </div>
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to={'/home'} style={{color: theme.color, textDecoration:`none`}} >Home</Link></li>
            <li><Link to={'/contact'} style={{color: theme.color,textDecoration:`none`}}>Contact</Link></li>
            <li><Link to={'/info'} style={{color: theme.color,textDecoration:`none`}} >Info</Link></li>
          </ul>
          <div style={{ position: 'relative' }} className='change-mode-btn'>
            <a className='switch-mode right' href='#' onClick={toggle} 
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