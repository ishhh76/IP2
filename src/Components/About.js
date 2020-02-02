import React from 'react'
import {Link} from "react-router-dom";

export default function About() {
    return (
        <React.Fragment>
        <div className="aboutcontainer1">
            <div className="aboutcontainer2"><h1 className="abouth1">My Profile</h1>
            <div className="menulink"><Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact Info</Link></div>
            <div className="aboutText1">
                <div className="atextcol">
                <h3 className="abouth3">Current status</h3>
                <p className="aboutp">A rookie front-end (FE) developer and a FE student.
                </p>
                <h3>Background</h3>
                <p> A graduate in M.S.Pharm, with specialization in Biotechnology and a doctoral degree in Medical science (Endocrinology, 2008) with years of work experience 
                    as a Senior Researcher at Karolinska Institute and at Sigrid Therapeutics AB as Research and Development Scientist. 
                </p>
                <p> Basic programmer in Python and a novice front-end developer with the passion and 
                    goal to evolve as a full stack developer. UX/UI designer.
                </p></div>
                <div className="aboutText2"><h3>Competencies</h3>
                    <p>
                        <ul>
                            <li> Biomedical Analysis</li> <br></br>
                            <li> Clinical and medical Research </li><br></br>
                            <li> In-vivo experimental research</li><br></br>
                            <li> Python </li><br></br>
                            <li> Javascript </li><br></br>
                            <li> React JS </li><br></br>
                            <li> HTML5 and CSS3 </li><br></br>
                            <li> SASS </li><br></br>
                            <li> UX / UI </li>

                        </ul>
                    </p>
                </div>
            </div>
        </div></div> 

        </React.Fragment>
    )
}
     