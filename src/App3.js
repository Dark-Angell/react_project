import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import About from './components2/About'
import Home from './components2/Home'

export default class App extends Component {
  render() {
    return (
      <div>

          <Link className="list-group-item" to="/about" style={{marginRight: '30px'}}>About</Link>
          <Link className="list-group-item" to="/home">Home</Link>


        <div>

            <Route path="/about" component={About}></Route>    
            <Route path="/home" component={Home}></Route>          
            <Redirect to="/about" />
        </div>
      </div>
    )
  }
}
