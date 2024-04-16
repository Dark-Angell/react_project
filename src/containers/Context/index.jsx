import React, { Component, Fragment } from 'react'

const MyContext = React.createContext()
const { Provider } = MyContext
export default class A extends Component {

  state = {
    count: 1
  }

  render() {
    const { count } = this.state

    return (
      <Fragment>
        这是 A 组件, count 值为: {count}
        <br />
        <Provider value={count}>
          <B />
        </Provider>
      </Fragment>
    )
  }
}

class B extends Component {

  static contextType = MyContext

  render() {
    console.log(this)
    return (
      <Fragment>
        这是 B 组件, , count 值为: {this.context}
        <br />
        <C/>
      </Fragment>
    )
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    console.log(this)
    return (
      <Fragment>
        这是 C 组件, , count 值为: {this.context}
      </Fragment>
    )
  }
}