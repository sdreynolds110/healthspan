import React, { Component } from "react";
import "../App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import RegistrationForm from './registration';
import ProviderPortal from './providerPortal';






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
                            <p className="tipCall">An API call at the loading of the site here would display a health tip found in either an existent API database or one created in this project</p>
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
                            <button className="login" onClick={this.handleFormSubmit}><Link to="/providerportal">Login</Link></button>
                            <br></br>
                            <br></br>
                        </form>
                        <p>Not registered? Fill in the information <Link to="/registration">here</Link> to become a part of HealthSpan.</p>

                        </div>
                    </div>
                </div>
            </div>
            <BrowserRouter render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={450}
                        classNames="fade"
                    >
                    <Switch location={location}>
                        <Route path="/registration" component={RegistrationForm} />
                        <Route path="/providerportal" component={ProviderPortal} />
                    </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )} />
        </div>
    )
}
}
export default SecondRow
