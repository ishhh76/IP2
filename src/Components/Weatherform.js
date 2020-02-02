import React from "react";

class Weatherform extends React.Component{

    
//    <!-- cancelform(){
//         document.getElementById("wform").reset();
//     }
//    -->
    render(){
           

        return(
                <form id="wform"onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" ref placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button >Get Weather</button>
                    {/* <button name="cancelform" onClick={this.cancelform.bind(this)} > Clear </button> */}
                    
                </form>
           
        )
    }
}

export default Weatherform;