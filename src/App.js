import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Provider from './components/providerPage';
import Patient from "./components/patientPage"
import { CSSTransition, TransitionGroup, } from 'react-transition-group';


class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <h1 className="navbar-brand">Health <i class="fas fa-arrows-alt-h"></i> Span</h1>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/provider" activeClassName="active">Provider Portal</NavLink>
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
                <Route path="/provider" component={Provider} />
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
