import React, { Component } from 'react'

export default class index extends Component {
  state = {
    count: 1
  }

  btn = (dataType) => {
    console.log(dataType)
    // return (event) => {
    //   console.log(dataType, event)
    //   this.setState({count: this.state.count + 1})
    // }
  }

  render() {
    return (
      <div>
        <h1>count 值为 : {this.state.count }</h1>
        <button onClick={() => this.btn('aaa') }>点击</button>
      </div>
    )
  }
}
