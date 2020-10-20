import React from 'react';
import {Link} from 'react-router-dom';

const NavBar:React.FC = () =>{
    return(
        <nav>
            <ul className="navbar">
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/form">Status</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;