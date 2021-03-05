import React from 'react'
import './App.css'
import About from './About'
import Shop from './Shop'
import Nav from './Nav'
import Itemsdetail from './Itemsdetail'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Shop" component={Shop}/>
        <Route path="/Shop/:id" component={Itemsdetail}/>
      </div>
    </Router>
  );
}

export default App;
