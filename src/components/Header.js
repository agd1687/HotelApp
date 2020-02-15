import React from 'react';
import Navbar from './Navbar';

export default function Header({logo}){
    return(
        <header className='sticky-top bg-light border-bottom border-secondary'>
            <div className='container'>
                <Navbar logo={logo}/>
            </div>
        </header>
    );
}