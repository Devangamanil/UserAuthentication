import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlLogin } from "react-icons/sl";
import Cookies from "js-cookie";

const NavigationBar = () => {
    const tokenExists = Cookies.get('token');
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Logo" className="mr-3 hidden sm:block" />
                    <span className="text-2xl font-bold text-green-400">Your Blog</span>
                </Link>
                <div className="hidden sm:flex space-x-6 flex-grow justify-end">
                    <Link to="/blog" className="btn btn-ghost text-green-400"><MdOutlineExplore className='inline align-middle' /> <span className='align-middle'>Explore</span></Link>
                    {Cookies.get('token') ? (<>
                        <Link to="/create" className="btn btn-ghost text-green-400"><MdOutlinePostAdd className='inline align-middle' /> <span className='align-middle'>New Post</span></Link>
                        <Link to="/profile" className="btn btn-ghost text-green-400"><CgProfile className='inline align-middle' /> <span className='align-middle'>Profile</span></Link>
                        {localStorage.getItem('isAdmin')==="true" ? (<Link to="/AdminPanel" className="btn btn-ghost text-green-400"><MdOutlineAdminPanelSettings className='inline align-middle' /> <span className='align-middle'>Admin Panel</span></Link>):''}
                        <button className="btn btn-ghost text-green-400" onClick={() => { Cookies.remove('token'); localStorage.removeItem('isAdmin'); navigate('/') }}><MdOutlineAdminPanelSettings className='inline align-middle' /> <span className='align-middle'>Logout</span></button>
                    </>) : 
                    <Link to="/login" className="btn btn-ghost text-green-400"><SlLogin className='inline align-middle' /> <span className='align-middle'>Login</span></Link>
                    }
                </div>
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-green-400 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden bg-gray-900 shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-green-400"><MdOutlineExplore className='inline align-middle' /> <span className='align-middle'>Explore</span></Link>
                        <Link to="/create" className="block px-3 py-2 rounded-md text-base font-medium text-green-400"><MdOutlinePostAdd className='inline align-middle' /> <span className='align-middle'>New Post</span></Link>
                        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-green-400"><SlLogin className='inline align-middle' /> <span className='align-middle'>Login</span></Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
