import React, { useState, useEffect } from 'react';
import { Button_c } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AuthenticationButton from './authentication-button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CFN
            <i class="fas fa-rocket" />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/publications'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/people'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                People
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/opportunities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Opportunities
              </Link>
            </li>
          </ul>
          <AuthenticationButton/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
