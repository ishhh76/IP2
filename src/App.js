import React from 'react';
import'./App.css';
import{BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header";
import Popup from './Components/Popup';  
import Sidebar from './Components/Sidebar';  
import Weather from "./Components/Weather";
import Weatherform from "./Components/Weatherform";
import Projects from "./Components/Projects";
import About from "./Components/About";




const Api_Key = "02d6c46890f0adaf5c47d81ad7142d3d";
const date = new Date();
const year = date.getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month = months[date.getMonth()];
const day = date.getDate();
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const wday = week[date.getDay()];


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        showPopup: false,   
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        status:false};
      
    }
  aboutme(){
   this.setState({
     showPopup:!this.state.showPopup
   });
  }
  
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},
    ${country}&units=metric&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
        
      })
      
      
    }
    else{
      this.setState({
        error: "Please input search values...", 
            })
        
    }
  }
  
  
  render() { 
    return (
      <Router>
        <div className="container1">
          
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Header className="header1"/>
              <p className="date">It's {year}{", "}{month}{" "}{day}{", "}{wday}{". "}</p>  
              <button className="popupbtn" onClick={this.aboutme.bind(this)}>My Philosophy</button>  
              
          
              {this.state.showPopup ?  
              <Popup className="popup" 
                  text='Conceive, Believe, Achieve'  
                  closePopup={this.aboutme.bind(this)} 
                  
              />  
              : null  
              }
          
          <p className="weathertext"> Today outside looks like </p>
              
          <Weatherform loadWeather={this.getWeather}/> 
           
              <Weather temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}/>
              

            </React.Fragment>

          )}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path= "/contact" component={Sidebar}/>
          
        </div>
      </Router>
    ) };
}

    
    
 

export default App;