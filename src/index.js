import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./Components/Footer";


ReactDOM.render(
<React.Fragment>
		<div className="maincontainer"><App />
		<Footer />
        </div>
</React.Fragment>
, document.getElementById('root'));

if (module.hot) {
    module.hot.accept()
    }

