import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Topics from './components/Topics';
import Collections from './components/Collections';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/collections" component={Collections} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
