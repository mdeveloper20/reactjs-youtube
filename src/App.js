import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage/HomePage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WatchPage from './containers/WatchPage/WatchPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' >
              <HomePage />

            </Route>
            <Route exact path='/watch' >
              <WatchPage />

            </Route>

          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
