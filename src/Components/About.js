import React from 'react'
import {Link} from "react-router-dom";

export default function About() {
    return (
        <React.Fragment>
            <h1>My Profile</h1>
            <Link to="/">Home</Link> | <Link to="/projects">Projects</Link>
            <h3>Current status</h3>
            <p>Am a rookie front-end(FE)developer and a student in the second termine of the 4 termine 
               FE developer course at KYH Stockholm, Sweden. 
            </p>
            <h3>Background</h3>
            <p> Back in 1998, I graduated in B.Pharm, and specialized in Biotecnology during MS.Pharm (2001) and pursued
               doctoral education in Medical science (Endocrinology, 2008) and joined Karolinska Institute (KI) as a 
               postdoctoral research fellow. Uptil 2017 I had worked at various positions at KI and then joined a start-up
               called Sigrid Therapeutics AB to work as Research and Development Scientist until 2018. 
            </p>
            <p>In 2019 I decided to change field of work and to move into the Information Technology field. Having done few
               basic programming course in Python, I took up FE developer course.
            </p>
            <h3>Competencies</h3>
            <p>
                <ul>
                    <li> Experienced Biomedical Analyst</li>
                    <li> Experienced Clinical Scientist</li>
                    <li> Experienced Pharmacist</li>
                    <li> Python rookie programmer</li>
                    <li> Javasccript programmer</li>
                    <li> Experienced in HTML5 and CSS3</li>

                </ul>
            </p>

        </React.Fragment>
    )
}
     