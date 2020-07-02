import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#"> Kushal </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
          aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"> Home </a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                    About
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown">
                      <a className="dropdown-item" href="#"> About ME </a>
                      <a className="dropdown-item" href="#"> Skills </a>
                  </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Contact Me </a>
              </li>
            </ul>
        </div>
      </nav>

      <div className="jumbotron">
        <h1> Hello World </h1>
      </div>
    </div>
  );
}

export default App;
