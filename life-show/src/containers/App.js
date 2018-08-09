import React, { Component } from 'react';
import '../styles/common.css';
import {renderRoutes} from 'react-router-config'
import {
  BrowserRouter as Router, // 路由器组件
  Switch
} from 'react-router-dom';
import Routes from '../router'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {renderRoutes(Routes)}
          </Switch>       
      </div>
      </Router>      
    );
  }
}

export default App;
