import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer({logo}){
    return(
        <footer className=" bg-light mt-3">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <Link to="/" className="d-flex justify-content-center" style={{width:"50px"}}><img src={logo} alt="Logo"className="w-100"/></Link>
                    <p className="mb-0"><span className="font-italic">Copyright &copy;</span>2020 <span className="font-weight-bold">Hotel Karlton</span></p>
                </div>
            </div>
        </footer>
    );
}