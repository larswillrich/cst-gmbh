import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from './pages/header/header'
import Main from './pages/main/main'
import Footer from './pages/footer/footer'
import Agb from './pages/agb/agb'
import Impressum from './pages/impressum/impressum'
import Datenschutz from './pages/datenschutz/datenschutz'
import ScrollToTop from './pages/scrollToTop/scrollToTop'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
        < ScrollToTop />
          <Main />
        </Route>
        <Route path="/agb">
          <ScrollToTop />
          <Agb />
        </Route>
        <Route path="/impressum">
        <ScrollToTop />
        <Impressum />
        </Route>
        <Route path="/datenschutz">
        <ScrollToTop />
        <Datenschutz />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('body')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
