import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-cyan-400'>
            <nav className='header'>
                <Link to={'/'}><h2 className='text-2xl font-bold border'>Tasks work!!!</h2></Link>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/addwork'}>Add Task</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </nav >
        </div>
    );
};

export default Navbar;