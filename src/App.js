import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage/HomePage'


class App extends React.Component{
    render(){
      return (
        <div className="App">
          <HomePage />
            
        </div>
      );
    }
}

export default App;
