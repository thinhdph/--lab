import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <ul className='header-menu'>
            <img className='logo' src='https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900' alt='app xem phim' />
            <li className='home'> <a className='active' href='#home'>Home </a> </li>
            <li className='new'> <a href='#new'> New</a></li>
            <li className='about'> <a href='#about'> About</a></li>
            <li className='contact'> <a href='#contact'> Contact</a></li>
          </ul>
          <form className='search-bar'>
            <input className='search' type='text' placeholder='Tìm tên phim...' name='keyword' />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
        </nav>
      </div>
    )
  }
}