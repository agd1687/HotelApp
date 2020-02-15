import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({logo}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-0">
            <Link className="navbar-brand justify-content-end" to="/" style={{width: '50px'}}><img src={logo} alt='Logo' className="w-100"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/rooms">Rooms</Link>
                <Link className="nav-item nav-link" to="/#services">Services</Link>
                <Link className="nav-item nav-link" to="/#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}