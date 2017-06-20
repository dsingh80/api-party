import React, { Component } from 'react';
import './App.css';

import{ Switch, Route, NavLink } from 'react-router-dom';
import Github from './Github.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/github">Github API</NavLink></li>
            <li><NavLink to="/nasa">NASA API</NavLink></li>
          </ul>
        </div>
        
        
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" render={()=><p>NASA!</p>} />
          <Route render={()=> <p>To begin, select one of the APIs above</p>} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
