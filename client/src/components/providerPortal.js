import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class ProviderPortal extends Component {
    state = {
        name: "",
        gender: "",
        age: "",
        medication: "",
        center: "",
        operation: "",
        diagnosis: ""
    }
    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    };
    submit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            medication: this.state.medication,
            center: this.state.center,
            operation: this.state.operation,
            diagnosis: this.state.diagnosis
        };

        axios({
            url: "/api/save",
            method: "POST",
            data: payload
        })
            .then(() => {
                console.log("Data has been sent")
            })
            .catch(() => {
                console.log("Data did not send")
            })
    };

  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col col-md-5">
            <br></br>
            <h3>Put in patient's information here:</h3>
                <div className="card">
                    <form onSubmit={this.submit}>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Name"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            placeholder="Gender"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder="Age"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="medication"
                            value={this.state.medication}
                            onChange={this.handleChange}
                            placeholder="Medication"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="center"
                            value={this.state.center}
                            onChange={this.handleChange}
                            placeholder="Medical Center"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="operation"
                            value={this.state.operation}
                            onChange={this.handleChange}
                            placeholder="Operation"
                        />
                        <br></br>
                        <br></br>
                        <input className="input"
                            type="text"
                            name="diagnosis"
                            value={this.state.diagnosis}
                            onChange={this.handleChange}
                            placeholder="Diagnosis"
                        />
                        <br></br>
                        <br></br>
                        <button>Submit</button>
                        <br></br>
                        <br></br>
                    </form>
                </div>
            </div>
            <div className="col col-md">
                <div className="content">
                </div>
            </div>
            <div className="col col-md-5">
            <br></br>
            <h3>Patient information will display here:</h3>
                <div className="card">
                    <div className="content">
                    <br></br>
                        <input className="input"
                            placeholder="Search patient's name here"
                        />
                        <br></br>
                        <br></br>
                        <button>Submit</button>
                        <br></br>
                        <br></br>
                        <ul>
                            <li><input className="input"
                            placeholder="Gender"
                            /></li>
                            <br></br>
                            <li><input className="input"
                            placeholder="Age"
                            /></li>
                            <br></br>
                            <li><input className="input"
                            placeholder="Medications"
                            /></li>
                            <br></br>
                            <li><input className="input"
                            placeholder="Medical Center"
                            /></li>
                            <br></br>
                            <li><input className="input"
                            placeholder="Operation"
                            /></li>
                            <br></br>
                            <li><input className="input"
                            placeholder="Diagnosis"
                            /></li>
                            <br></br>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default ProviderPortal;

