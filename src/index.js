import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Photo from './components/Photo';
import Topics from './components/Topics';
import TopicPhotos from './components/TopicPhotos';
import TPhoto from './components/TPhoto';
import Footer from './components/Footer';
import './css/index.css';

const store = createStore(rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/five-star-images" component={Home} />
          <Route exact path="/photo/:id" component={Photo} />
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/topic/:id/photos" component={TopicPhotos} />
          <Route exact path="/topic/:id/photo/:id" component={TPhoto} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
