import React, { Component } from 'react'
import github from "./github.png";
import linkedin from "./linkedin.png";


export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footercontainer">
					<div className="footerrow">
						
							
							<a
								className="px-3"
								href="https://github.com/ishhh76"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a  className="px-3"
								href="hhttps://se.linkedin.com/in/ishrath-a-626584b"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						
					</div>
					<h5 className="pt-4">Ishrath Ansurudeen &copy; 2020</h5>
				</div>
			</div>
		);
    }   
}             
            
export default Footer
