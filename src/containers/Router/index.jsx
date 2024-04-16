import React, { Component } from 'react'
import { Link, Route  } from 'react-router-dom'
import Home from './home'
import About from './about'

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">home</Link>&nbsp;
          <Link to="/about">about</Link>
        </div>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    )
  }
}
