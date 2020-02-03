import React from "react";

class Weatherform extends React.Component{

    
//    <!-- cancelform(){
//         document.getElementById("wform").reset();
//     }
//    -->
    render(){
           

        return(
                <form id="wform"onSubmit = {this.props.loadWeather}>
                    <div className="wcontainer"><input type="text" name="city" ref placeholder="City..."/></div>
                    <div className="wcontainer"><input type="text" name="country" placeholder="Country..."/></div>
                    <div><button id="wbtn" >Get Weather</button></div>
                    
                    {/* <button name="cancelform" onClick={this.cancelform.bind(this)} > Clear </button> */}
                    
                </form>
           
        )
    }
}

export default Weatherform;