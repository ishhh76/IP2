import React, { Component } from 'react'
import image from './hshake2.jpg';
import {Link} from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <div>
                <div className="header1">
                    <img src={image} className="handshake" alt="handshake" />
                    <h1 className="introline">Hi, I'm Ishrath.</h1>  
                    <div className="menulink"><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact Info</Link></div>
                    
                    
                </div>               
            </div>
        )
    }
}

export default Header
