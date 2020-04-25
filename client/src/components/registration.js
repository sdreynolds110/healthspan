import React, { Component } from "react";
import "../App.css";

class RegistrationForm extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: ""
    };
  
    render() {
        return (
            <div className="container">
                <div className="row ">                            
                    <div className="col col-md-6 text-align-center">
                        <div className="card">
                            <div className="content">
                            <br></br>
                            <h3>Provider Registration:</h3>
                            <form className="register">
                                <input
                                    className="input"
                                    value={this.state.titleName}
                                    name="titleName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Title"
                                />
                                <br></br>
                                <br></br>
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
                                    value={this.state.centerName}
                                    name="centerName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Medical Center"
                                />
                                <br></br>
                                <br></br>
                                <input
                                    className="input"
                                    value={this.state.educationName}
                                    name="educationName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Education"
                                />
                                <br></br>
                                <br></br>
                                <input
                                    className="input"
                                    value={this.state.experieneName}
                                    name="experienceName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Years of Experience"
                                />
                                <br></br>
                                <br></br>
                                <input
                                    className="input"
                                    value={this.state.licensesName}
                                    name="licensesName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Licensure"
                                />
                                <br></br>
                                <br></br>
                                <textarea
                                    className="inputBio"
                                    value={this.state.bioName}
                                    name="bioName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Basic Information"
                                />
                                <br></br>
                                <br></br>
                                <button classname="register" onClick={this.handleFormSubmit}>Register</button>
                                <br></br>
                                <br></br>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegistrationForm;