import React from 'react'
import{Link} from "react-router-dom"


export default function Thumbnails(props) {
    return (
        <div className="project">
            <div id="ptn">
                <div>
                    {/* <Link id="imagelink"to={props.projlink}>Link to the project "{props.projtitle}":</Link> */}
                    <img className="pimage"src={props.projimage} alt=""/>
                </div>
                <div className="pcontent"><div className="ptitle"> <p><span>Title:</span> {props.projtitle}</p> </div>
                <div className="pcategory"><p> <span>Category:</span> {props.projcategory}</p> </div></div>
            
            </div>
            
            
        </div>
    )
}

