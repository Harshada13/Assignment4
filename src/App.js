import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import './style.css';

class App extends Component{

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path = '/' component = {Homepage}/>
          <Route exact path='/Blog1' component={Blog1} />
          <Route exact path='/Blog2' component={Blog2} />
          <Route exact path='/Blog3' component={Blog3} />
          <Footer/>
        </div>
      </Router>
      
    );
  }
}
export default App;
