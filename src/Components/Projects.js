import React from 'react';
import Thumbnails from"./Thumbnails";
import {Link} from "react-router-dom";


export default function Projects(props) {
    return (
        <div>
            <div>
                <h1>Projects</h1>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>  
                <Thumbnails projlink="" 
                projimage="" 
                projtitle=""
                projcategory=""/>
            </div>
        </div>
    )
}
