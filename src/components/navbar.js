import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
    <div className="row">
      <div className="navbar col-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="navbar-brand">Health<i class="fas fa-arrows-alt-h"></i>Span</h1>
            <div className="navbar-nav collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto" href="index.html">Home</a></Button>
                  </li>
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto" href="google.com">Provider Login</a></Button>
                  </li>
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto" href="facebook.com">Patient Login</a></Button>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </div>
    </div>
    
  );
}


export default Navbar;