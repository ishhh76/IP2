import React, { Component } from 'react'

const abc="www.linkedin.com";

class Sidebar extends Component {

    state={
        name: "Dr. Ishrath Rafi",
        address:{street: "Lofotengatan 14",
                    pin:"164 33",
                    place:"Kista"},
        phone: "+46 738968373",
        email:"ishrarafi@gmail.com",
        linkedin: abc
    }
    

        render() {
            return (
            
            <div>
                <div className="sidebarcontainer">
                    <p> {this.state.name} </p>
                    <div>
                        <p>{this.state.address.street}</p>
                        <p>{this.state.address.pin}</p>
                        <p>{this.state.address.place}</p>

                    </div>
                    <p>{"Phone: " +this.state.phone}</p>
                    <p>{"Email: " + this.state.email}</p>
                    <p>{"Linkedin: " +this.state.linkedin}</p>
                </div>
                
            </div>

            );
        }
}
  
export default Sidebar;
