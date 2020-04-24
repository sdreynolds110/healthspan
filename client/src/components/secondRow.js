import React, { Component } from "react";
import "../App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import RegistrationForm from './registration';





class SecondRow extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: ""
    };
render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-5">
                    <h3 className="healthTip">Health Tip of the Day!</h3>
                    <div className="card">
                        <div className="content">
                            <p className="tipCall">BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH</p>
                        </div>
                    </div>
                </div>
                <div className="col col-md">
                        <div className="content">
                        </div>
                </div>
                <div className="col col-md-5">
                    <div className="card">
                        <div className="content">
                        <br></br>
                        <h3>Sign In Here:</h3>
                        <form>
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
                            <br></br>
                            <br></br>
                        </form>
                        <p>Not registered? Fill in the information <NavLink to="/registration" activeClassName="active">here</NavLink> to become a part of HealthSpan.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
              <Route path="/registration" component={RegistrationForm} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        </div>
    )
}
}
export default SecondRow
