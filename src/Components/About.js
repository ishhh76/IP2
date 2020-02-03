import React from 'react'
import {Link} from "react-router-dom";
import responsive from "./responsive.jpg"
import agile from "./agile.jpg"
import python from "./python.png"
import three from "./three.png"
import react from "./react.png"
import sass from "./sass.png"
import ux from "./ux.jpg"



export default function About() {
    return (
        <React.Fragment>
        <div className="aboutcontainer1">
            <div className="aboutcontainer2"><h1 className="abouth1">My Profile</h1>
            <div className="menulink"><Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact Info</Link></div>
            <div className="aboutText1">
                <div className="atextcol">
                <h4 className="abouth3"> Am, </h4>
                <p className="aboutp">A rookie front-end (FE) developer and a FE student.
                </p>
                <p > M.S.Pharm, graduate with specialization in Biotechnology and a doctoral degree in Medical science.</p>
                
                <p> Basic programmer in Python, UX designer and a novice front-end developer with the passion and 
                    goal to evolve as a full stack developer. 
                </p>
                </div>
                <div className="aboutText2"><h4>Competencies</h4>
                    
                        <ul>
                            
                            <li> Clinical, Experimental and<br></br> Bio-medicalResearch </li><br></br>
                            <li> <img id="python" src={python}/> Python </li><br></br>
                            <li> <img id="three" src={three}/></li>
                            <span id="aspan"> HTML5, CSS and  Javascript  </span><br></br>
                            <li> <img id="react" src={react}/>React JS </li><br></br>
                            <li> <img id="sass" src={sass}/>SASS </li><br></br>
                            <li> <img id="ux" src={ux}/>UX / UI </li><br></br>
                            <li> <img id="responsive" src={responsive}/>Responsive design</li><br></br>
                            <li> <img id="agile" src={agile}/>Agile Methodology</li><br></br>

                        </ul>
                        
                        
                    
                </div>
            </div>
        </div></div> 

        </React.Fragment>
    )
}
     