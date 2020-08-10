import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HashLink as Link } from 'react-router-hash-link';

var createReactClass = require('create-react-class');

export default createReactClass({
  render() {
    return (
          <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
              <h1 className="text-light"><a href="index.html"><span>CST</span></a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li><a href="https://larswillrich.com/cst-gmbh/index.html#/#about">Über uns</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </nav>
          </div>
      );
    }
  });
  