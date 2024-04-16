import React, { Component } from 'react'

export default class Parent extends Component {

  state = {
    hasError: ''
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: error}

  }

  render() {
    return (
      <div>
        我是父组件
        {this.state.hasError ? <h2>网络繁忙，请稍后</h2> : <Child></Child>}
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        我是子组件
        {this.state.count}
      </div>
    )
  }
}
