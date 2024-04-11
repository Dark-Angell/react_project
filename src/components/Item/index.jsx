import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  
  state = {
    mouse: false
  }

  handleMouse = (flag)=> {
    return ()=> {
      this.setState({mouse: flag})
    }
  }

  handleCheck = ()=>{
    
  }

  render() {
    const {name, done} = this.props
    const {mouse} = this.state

    return (
      <li style={{background: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} style={{width: '30px'}} onChange={this.handleCheck} />
          <span>{name}</span>
        </label>
        <button className='btn btn-danger' style={{display: 'none'}}>删除</button>
      </li>
    )
  }
}
