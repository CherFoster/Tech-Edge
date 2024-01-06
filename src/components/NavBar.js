import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className='header'>
            <div className='nav-items'>
                <Link className='nav-link' to='/home'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                <Link className='nav-link' to='contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;