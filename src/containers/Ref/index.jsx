import React, { Component } from 'react'

export default class index extends Component {
  btn = () => {
    // 1. 使用 refs
    // const { input } = this.refs

    // 2. 使用 回调函数
    const { inp1 } = this
    console.log(inp1.value)
  }
  render() {
    return (
      <div>
        <input ref = {c => this.inp1 = c}  type="text" />
        <button onClick={this.btn}>点击</button>
      </div>
    )
  }
}
