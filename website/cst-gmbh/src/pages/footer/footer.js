import React from 'react';
var createReactClass = require('create-react-class');

export default createReactClass({
    render() {
      return (
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 text-lg-left text-center">
              </div>
              <div className="col-lg-6">
                <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="/cst-gmbh/index.html" className="scrollto">Home</a>
                {/* End About Us Section  <a href="/cst-gmbh/index.html" className="scrollto">About</a>
                  <a href="/cst-gmbh/index.html#/agb">AGB</a>
                  <a href="/cst-gmbh/index.html#/datenschutz">Datenschutz</a>
                  <a href="/cst-gmbh/index.html#/impressum">Impressum</a> */}

                  <a href="/index.html" className="scrollto">Home</a>
                  <a href="/index.html" className="scrollto">About</a>
                  <a href="/index.html#/agb">AGB</a>
                  <a href="/index.html#/datenschutz">Datenschutz</a>
                  <a href="/index.html#/impressum">Impressum</a>
                </nav>
              </div>
            </div>
          </div>
      );
    }
  });