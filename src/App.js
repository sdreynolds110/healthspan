import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import ProviderLogin from './components/providerLogin';
import Patient from "./components/patientPage"
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
          <h1 className="navbar-brand">Health<i className="fas fa-arrows-alt-h"></i>Span</h1>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/providerlogin" activeClassName="active">Provider Portal</NavLink>
          <NavLink to="/patient" activeClassName="active">Patient Portal</NavLink>
        </div>

        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path="/home" component={Home} />
                <Route path="/providerlogin" component={ProviderLogin} />
                <Route path="/patient" component={Patient} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
