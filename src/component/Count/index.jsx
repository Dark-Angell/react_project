import React, { Component } from 'react'

export default class index extends Component {


  increment = () => {
    const {value} = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const {value} = this.selectNumber
    this.props.decrement(value * 1)
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0 ) {
      this.props.increment(value * 1)
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>我是 count 组件</h2>
        <h1>当前求和为:{this.props.count}</h1>
        <h1>下方人数为：{this.props.renshu.length}</h1>
        <select ref={c =>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>基数求和</button>&nbsp;
        <button onClick={this.incrementAsync}>异步求和</button>&nbsp;
      </div>
    )
  }
}