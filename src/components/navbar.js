import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
    <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="navbar-brand">HealthSpan</h1>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Button type="button"><a className="btn btn-light" href="index.html">Home</a></Button>
              <Button type="button"><a className="btn btn-light" href="google.com">Provider Login</a></Button>
              <Button type="button"><a className="btn btn-light" href="facebook.com">Patient Login</a></Button>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;