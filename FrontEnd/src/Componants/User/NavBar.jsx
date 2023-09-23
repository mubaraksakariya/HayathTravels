import React, { useState } from 'react'
import './NavBar.css'
import { useLocation, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className="navbar navbar-expand-lg navbar-top-div p-0">
            <div className="container">
                <a className="navbar-brand" href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        navigate('/')
                    }}
                ><img src="./assets/Logo-Nobg.png" alt="" className='Logo-img' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item"
                            onClick={() => navigate('/')}
                        >
                            <a className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item"
                            onClick={() => navigate('/about')}
                        >
                            <a className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="#">About</a>
                        </li>
                        <li className="nav-item"
                            onClick={() => navigate('/services')}
                        >
                            <a className={`nav-link ${pathname === '/services' ? 'active' : ''}`} href="#">Services</a>
                        </li>
                        <li className="nav-item"
                            onClick={() => navigate('/contact')}
                        >
                            <a className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar