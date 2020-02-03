import React from 'react';
import Thumbnails from"./Thumbnails";
import {Link} from "react-router-dom";
import ip1 from "./IP1.png";
import todo from "./ToDo-JS.png"
import todoR from "./ToDo-React.png"
// import flora from "./floral.jpg"




export default function Projects(props) {
    return (
        <div className="pcontainer1">
            <div className="pcontainer2">
            
                <h1>Projects</h1>
                <div className="menulink"><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact Info</Link></div>  
                <div id="thumpnailcontainer">
                <Thumbnails 
                projimage={ip1} 
                projtitle="A Realty webpage in Javascript"
                projcategory="HTML, CSS, Javascript"/>

                <Thumbnails 
                projimage={todo} 
                projtitle="A To Do webApp in Javascript"
                projcategory="HTML, CSS, Javascript"/>

                <Thumbnails className="ptn3"
                projimage={todoR} 
                projtitle="A To Do webApp in React"
                projcategory="HTML, CSS, Javascript, React"/>
                
{/* 
                <Thumbnails className="ptn3"
                projimage={flora} 
                projtitle="To Do webApp in Javascript"
                projcategory="HTML, CSS, Javascript"/> */}
                </div>

                

                
            </div>
        </div>
    )
}
