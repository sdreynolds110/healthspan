import React, { Component } from "react";
import "../App.css";

class PatientForm extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: ""
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="register">
            <br></br>
            <h3>Sign In Here:</h3>
            <input
                className="input"
                value={this.state.loginName}
                name="loginName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
            />
            <br></br>
            <br></br>
            <input
                className="input"
                value={this.state.passwordName}
                name="passwordName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Password"
            />
            <br></br>
            <br></br>
            <button className="login" onClick={this.handleFormSubmit}>Sign In</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <p>Not registered? Fill in the information below to become a part of HealthSpan.</p>
        <br></br>
        <form className="register">
            <input
                className="input"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
            />
            <br></br>
            <br></br>
            <input
                className="input"
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
            />
            <br></br>
            <br></br>
            <input
                className="input"
                value={this.state.loginName}
                name="loginName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
            />
            <br></br>
            <br></br>
            <input
                className="input"
                value={this.state.passwordName}
                name="passwordName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Password"
            />
            <br></br>
            <br></br>
            <input
                className="input"
                value={this.state.dobName}
                name="dobName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Date of Birth"
            />
            <br></br>
            <br></br>
            <textarea
                className="inputHistory"
                value={this.state.historyName}
                name="historyName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Previous Medical History"
            />
            <br></br>
            <br></br>
          <button classname="register" onClick={this.handleFormSubmit}>Register</button>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

export default PatientForm;