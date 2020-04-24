import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
    <div className="row">
      <div className="navbar col-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="navbar-brand">Health<i class="fas fa-arrows-alt-h"></i>Span</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="navbar-nav collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto home" href="/">Home</a></Button>
                  </li>
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto provider" href="./providerPage">Providers Portal</a></Button>
                  </li>
                  <li class="nav-item">
                    <Button type="button"><a className="btn btn-light btn-lg mr-auto patient" href="/patientPage">Patients Portal</a></Button>
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