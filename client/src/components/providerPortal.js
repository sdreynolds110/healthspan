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
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

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
            url: "http://localhost:3000/api/save",
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
      <div>
          <div className="container-top">
              <div className="row">
                  <div className="col col-md-5">
                      <div className="card">
                        <form onSubmit={this.submit}>
                            <br></br>
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
                        </form>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col col-md">
            <div className="content">
            </div>
          </div>
          <div className="col col-md-5">
            <div className="content">
                <div className="card">

                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ProviderPortal;

