import React, { Component } from 'react'
import store from '../../redux/store'

export default class index extends Component {

  state = {
    
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }

  increment = () => {
    const {value} = this.selectNumber
    store.dispatch({type: 'increment', data: value * 1})
  }

  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch({type: 'increment', data: value * 1})
  }

  decrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch({type: 'increment', data: value * 1})
    }
  }

  decrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value * 1})
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c =>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.decrementIfOdd}>基数求和</button>&nbsp;
        <button onClick={this.decrementAsync}>异步求和</button>&nbsp;
      </div>
    )
  }
}
