import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
    
      
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/myywkaab"
        method="POST"
      >
       <div className="contactform"> <h3>Contact Form</h3>
        <label>Name:</label>
		    <input id="cinp"type="text" name="name"/>
		    <label>Email:</label>
        <input id="cinp"type="email" name="email" />
        <label>Message:</label>
        <input id="cinp"type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button id="contactbtn">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
            
export default Contact
