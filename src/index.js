import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photo from './components/Photo';
import Topics from './components/Topics';
import Footer from './components/Footer';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/photo/:id" component={Photo} />
          <Route exact path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
