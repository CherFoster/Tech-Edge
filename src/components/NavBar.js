import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className='header'>
        <nav className="nav"> {/* Assuming 'nav' class from your CSS */}
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </nav>
    </header>
  );
}

export default NavBar;