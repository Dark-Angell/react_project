import React, { Component } from 'react'

export default class index extends Component {

  myRef = React.createRef()
  btn = () => {
    // 1. 使用 refs
    // const { input } = this.refs

    // 2. 使用 回调函数
    // const { inp1 } = this
    // console.log(inp1.value)

    // createRef
    console.log(this.myRef.current.value)

  }
  render() {
    return (
      <div>
        <input ref = {this.myRef}  type="text" />
        <button onClick={this.btn}>点击</button>
      </div>
    )
  }
}
