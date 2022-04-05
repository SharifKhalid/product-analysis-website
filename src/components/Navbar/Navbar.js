import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            
            <nav className='nav'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                
                
            </nav>
        </div>
    );
};

export default Navbar;