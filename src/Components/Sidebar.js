import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Contact from "./Contact.js";


class Sidebar extends Component {

    state={
        name: "Dr. Ishrath Ansurudeen",
        address:{street: "Lofotengatan 14",
                    pin:"164 33",
                    place:"Stockholm"},
        phone: "+46 738968373",
        email:"ishrarafi@gmail.com",
       
    }
    

        render() {
            return (
            
            <div className="ccontainer1">
                <div className="ccontainer2">
                    <h1>Contact Me</h1>
                    <div className="menulink"><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link></div>
                    <div className="ctext">
                        <p> {this.state.name} </p>
                    <div>
                        {/* <p>{this.state.address.street}</p>
                        <p>{this.state.address.pin}</p> */}
                        <p>{this.state.address.place}</p>

                    </div>
                    {/* <p>{"Phone: " +this.state.phone}</p> */}
                    <p><span>Email:</span> {this.state.email}</p>
                    </div>
                    <Contact/>
                </div>
                
            </div>

            );
        }
}
  
export default Sidebar;
