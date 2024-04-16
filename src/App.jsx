import React, { Component } from 'react'
import Count from './containers/count'   // 容器组件
import Person from './containers/Person'   // 容器组件

// import SetState from './containers/SetState'
import UseStateHooks from './containers/Hooks/useState'

export default class App extends Component {
  render() {
    return (
      <div>
        {/*count 容器组件不能自身引入 store，  需要父组件引入，通过 props 传递 */}
        {/* <Count />
        <hr />
        <Person /> */}

        {/* setSate */}
        {/* <SetState /> */}

        <UseStateHooks />
      </div>
    )
  }
}
