import React from 'react'
import{Link} from "react-router-dom"

export default function Thumbnails(props) {
    return (
        <div className="project">
            <Link to={props.projlink}>
                <div>
                    <img src={props.projimage} alt=""/>
                </div>
                <div className="project-title"> {props.projtitle}</div>
                <div className="project-category">{props.projcategory}</div>
            </Link>
            
        </div>
    )
}

